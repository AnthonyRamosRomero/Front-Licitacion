import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {RequerimientoComponent} from '../../component/requerimiento/requerimiento.component';
import {LicitacionComponent} from '../../component/licitacion/licitacion.component';
import {ProbandoComponent} from '../../component/probando/probando.component';
import {MonitorRequerimientosComponent} from '../../component/monitor-requerimientos/monitor-requerimientos.component'
import {ConfigProcesoComponent} from '../../component/config-proceso/config-proceso.component'


import {ModalComponent} from '../../component/requerimiento/modal/modal.component';


/*ROUTING PRINCIPAL*/

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'upgrade', component: UpgradeComponent},
    {path: 'requerimiento', component: RequerimientoComponent},
    {path: 'licitacion', component: LicitacionComponent},
    {path: 'modal', component: ModalComponent},
    {path: 'probando', component: ProbandoComponent},
    {path: 'monitorrequerimiento', component: MonitorRequerimientosComponent},
    {path: 'configProceso', component: ConfigProcesoComponent},

];
