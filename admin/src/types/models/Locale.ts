import { SettingLocale } from './SettingLocale';
import { Translation } from './Translation';
import { FileProviderLocale } from './FileProviderLocale';
import { MultifactorLocale } from './MultifactorLocale';
import { DashboardComponentLocale } from './DashboardComponentLocale';
import { ScreenLocale } from './ScreenLocale';
import { SettingGroupLocale } from './SettingGroupLocale';
import { DashboardLocale } from './DashboardLocale';
import { MenuLocale } from './MenuLocale';
import { RoleLocale } from './RoleLocale';

export type Locale = {
  id?: number;
  code: string;
  region: string;
  enabled?: boolean;
  created_at?: string;
  updated_at?: string;
  setting_locale?: SettingLocale[];
  translation?: Translation[];
  file_provider_locale?: FileProviderLocale[];
  multifactor_locale?: MultifactorLocale[];
  dashboard_component_locale?: DashboardComponentLocale[];
  screen_locale?: ScreenLocale[];
  setting_group_locale?: SettingGroupLocale[];
  dashboard_locale?: DashboardLocale[];
  menu_locale?: MenuLocale[];
  role_locale?: RoleLocale[];
}