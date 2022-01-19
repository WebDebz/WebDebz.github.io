<template>
  <v-navigation-drawer
    app
    id="left-hand-nav"
    :value="leftHandNav"
    @input="updateLeftHandNav"
    :class="{ 'large': $vuetify.breakpoint.lgAndUp }"
  >
    <v-list>
      <v-list-item class="close" @click.native="updateLeftHandNav(false)">
        <v-list-item-content>
          <v-list-item-title v-text="$t('L_CLOSE')" />
        </v-list-item-content>
        <v-list-item-icon role="button" tabindex="0" aria-label="Close" @keydown.enter="updateLeftHandNav(false)">
          <v-icon>mdi-close</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item
        class="v-list-group__header"
        @click="goHome"
      >
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="$t('L_NAV_HOME')" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        v-for="page in quotePages" :key="page.title"
        class="v-list-group__header"
        :class="{'v-list-item--active' : $route.name === page.name }"
        @click="navigate(page)"
        :disabled="!page.enabled"
      >
        <v-list-item-icon>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title :class="{'disabled-item': !page.enabled}" v-text="$t(page.title)" />
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        no-action
        :key="section.title"
        :class="section.additionalClasses"
        :prepend-icon="section.icon"
        v-for="section in navigationEntries"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="$t(section.title)" />
          </v-list-item-content>
        </template>
        <div class="list-items-padding">
          <v-list-item
            :key="page.title"
            class="sub-nav-item"
            @click="navigate(page)"
            v-for="page in section.pages()"
          >
            <v-list-item-icon>
              <v-icon class="submenu-icon" v-if="$route.name === page.name" color="primary" size="20">mdi-checkbox-marked-circle</v-icon>
              <v-icon v-else />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="$t(page.title)" />
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-group>
      <v-list-item
        class="v-list-group__header"
        @click="navigate({ name: 'Print' })"
      >
        <v-list-item-icon>
          <v-icon>mdi-printer</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="$t('L_NAV_PRINT')" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <PriDialog :content="priDialog" v-model="priDialog.active" @close="closeDialog"/>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Action, Getter } from 'vuex-class';
import LanguageToggleMixin from '@/mixins/LanguageToggleMixin';
import { Component, Mixins, Watch } from 'vue-property-decorator';
import { LEFT_HAND_NAVIGATION_ENTRIES, QQ_PAGES, navPageDialogs } from './constants';
import { APP, UI } from '@/store/constants';
import { getLink } from '@/shared/utils/utils';
import { setRoutesEnabled } from '@/router/routerUtils/router.utils';
import { NavItem } from '@/shared/utils/types';
import { PriDialogContent } from '@/store/ui/types';
import { PriDialog } from '@primerica/life-ui-lib/src/index';
@Component({
  components: {
    PriDialog
  }
})
export default class LeftHandNavigation extends Mixins(LanguageToggleMixin) {
  @Getter('leftHandNav', { namespace: UI })
  leftHandNav!: boolean;
  @Getter('navigationDisabled', { namespace: UI })
  navigationDisabled!: boolean;
  @Getter('allowedRoutes', { namespace: UI })
  allowedRoutes!: string[];
  @Getter('quickCheck', { namespace: UI })
  quickCheck!: string;
  @Action('updateLeftHandNav', { namespace: UI })
  updateLeftHandNav!: Function;
  quotePages: NavItem[] = [];
  updateQuotePages() {
    this.quotePages = setRoutesEnabled(QQ_PAGES, this.allowedRoutes);
  }
  @Watch('allowedRoutes', { immediate: false })
  routesChanged() {
    this.updateQuotePages();
  }
  created() {
    this.updateQuotePages();
  }
  goHome() {
    window.location.replace(getLink('priApp'));
  }
  get navigationEntries() {
    return LEFT_HAND_NAVIGATION_ENTRIES();
  }
  @Getter('priDialog', { namespace: UI })
  priDialog!: PriDialogContent;
  @Action('closeDialog', { namespace: UI })
  closeDialog!: Function;
  @Action('openDialog', { namespace: UI })
  openDialog!: Function;
  @Getter('hasValidPremium', { namespace: APP })
  hasValidPremium!: boolean;
  checkRouting(name: string) {
    if (!this.hasValidPremium) {
      const dialogContent = navPageDialogs[name.toLowerCase()];
      dialogContent.active = true;
      this.updateLeftHandNav(false);
      return this.openDialog(dialogContent);
    }
    this.$router.push({ name });
  }
  navigate({ name }: { name: string | Function }) {
    if (typeof name === 'function') return name();
    if (this.$route.name === name) return undefined;
    if (name === 'Print' || name === 'AgentInfo') {
      return this.checkRouting(name);
    }
    this.$router.push({ name });
  }
}
</script>

<style lang="scss">
#left-hand-nav {
  width: 320px !important;
  z-index: 10;
  background-color: var(--v-grey300-base) !important;
  &.large {
    width: 255px !important;
  }
  .close.v-list-item:not(.sub-nav-item) {
    cursor: pointer;
    height: 64px;
    background-color: #0c6dca;
    .v-list-item__content {
      color: #fff;
      text-align: right;
      margin-right: 12px;
    }
  }
  .v-list {
    padding: 0;
    .v-list-group__items {
      background: white;
    }
    .list-items-padding {
      padding: 10px 0;
    }
  }
  .v-list-group__header {
    border-top: 0.5px solid rgba(6, 53, 98, 0.15);
    border-bottom: 0.5px solid rgba(6, 53, 98, 0.15);
  }
  .v-list-item {
    &.v-list-item--disabled {
      .v-icon {
        color: var(--v-black200-base) !important;
      }
      .v-list-item__title {
        color: var(--v-black200-base);
      }
      &.sub-nav-item {
        .v-icon {
          color: var(--v-black200-base) !important;
        }
        .v-list-item__title {
          color: var(--v-black200-base);
          font-size: 14px;
        }
      }
    }
    background-color: var(--v-white-base);
    .v-list-item__icon:not(.v-list-group__header__append-icon) {
      margin: 0 4px 0 0 !important;
      align-self: auto;
    }
    &.sub-nav-item {
      min-height: 36px;
      padding-left: 16px !important;
      .v-icon {
        font-size: 18px;
        color: var(--v-accent-base) !important;
      }
      .v-list-item__title {
        color: var(--v-accent-base);
        font-size: 14px;
      }
      .v-list-item__content {
        padding: 6px 0 !important;
      }
    }
    &:not(.sub-nav-item) {
      height: 48px;
      color: var(--v-primary-base);
      .v-list-item__content {
        color: var(--v-primary-base);
        font-weight: 600;
      }
      .v-list-item__icon:not(.v-list-group__header__append-icon) {
        margin: 0 4px 0 0 !important;
        .v-icon {
          opacity: 0.3;
          font-size: 18px;
          color: var(--v-primary-base);
          transition: none;
          &.mdi-close {
            color: #fff;
            opacity: 1;
            font-size: 19px;
          }
        }
      }
      .v-list-group__header__append-icon {
        min-width: auto !important;
        .v-icon {
          color: var(--v-primary-base);
        }
      }
    }
    &.v-list-item--active {
      background: var(--v-primary-base);
      color: var(--v-white-base);
      .v-list-item__title {
        color: var(--v-white-base);
      }
      .v-icon {
        color: var(--v-white-base) !important;
      }
      .v-list-item__icon:not(.v-list-group__header__append-icon) {
        margin: 12px 10px 12px -4px !important;
        .v-icon {
          color: var(--v-white-base);
          border: 3px solid var(--v-accent-base);
          opacity: 1;
          transform: translate(1px, 0px);
          transition: none;
          background: var(--v-accent-base);
          border-radius: 50%;
        }
      }
    }
  }
  .grey {
    .v-list-group__header {
      border-top: 0.5px solid #fff;
      border-bottom: 0.5px solid #fff;
    }
    .v-list-item {
      background-color: var(--v-white-base);
      &:not(.sub-nav-item) {
        height: 48px;
        background-color: var(--v-navToolsBlue-base);
        .v-list-item__content {
          color: var(--v-primary-base);
          .v-list-item__title {
            color: var(--v-white-base);
          }
        }
      }
      &.sub-nav-item {
        min-height: 36px;
        .v-list-item__title {
          color: var(--v-accent-base);
          font-size: 14px;
        }
      }
      .v-icon {
        color: var(--v-white-base);
        opacity: 1;
      }
      &.v-list-item--active {
        color: var(--v-white-base);
        .v-list-item__title {
          color: var(--v-white-base);
        }
        .v-icon {
          color: var(--v-white-base);
        }
        .v-list-item__icon:not(.v-list-group__header__append-icon) {
          margin: 12px 10px 12px -4px !important;
          .v-icon {
            background: var(--v-accent-base);
            border: 3px solid var(--v-accent-base);
            border-radius: 50%;
            color: var(--v-white-base);
            opacity: 1;
          }
        }
      }
    }
  }
  .v-list-item.grey {
    background-color: var(--v-navToolsBlue-base) !important;
    .v-icon {
      color: var(--v-white-base);
      opacity: 1;
    }
    .v-list-item__content {
      color: var(--v-white-base);
      font-weight: 600;
    }
  }
  .v-navigation-drawer__content .v-icon.mdi.mdi-tag {
    transform: scaleX(-1);
  }
}
</style>