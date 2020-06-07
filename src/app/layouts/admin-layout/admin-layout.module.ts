import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';

import {LicitacionComponent} from '../../component/licitacion/licitacion.component';
import {RequerimientoComponent} from '../../component/requerimiento/requerimiento.component';
import {ProbandoComponent} from '../../component/probando/probando.component';
import {MonitorRequerimientosComponent} from '../../component/monitor-requerimientos/monitor-requerimientos.component';
import {ModalComponent} from '../../component/requerimiento/modal/modal.component';
import {ModalRequerimientoComponent} from '../../component/monitor-requerimientos/ModalMonitorRequerimiento/modal-requerimiento/modal-requerimiento.component';
import {ConfigProcesoComponent} from '../../component/config-proceso/config-proceso.component';


import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// @ts-ignore
import {MatTableModule} from '@angular/material/table';



// @ts-ignore
import {CookieService} from 'ngx-cookie-service';
import {MatPaginatorModule} from '@angular/material/paginator'; /*Cookies*/
import {MatCheckboxModule} from '@angular/material/checkbox'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDialogModule,

        MatDatepickerModule,
        MatNativeDateModule,

        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatTabsModule,
        MatSlideToggleModule
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        LicitacionComponent,
        RequerimientoComponent,
        ProbandoComponent,
        MonitorRequerimientosComponent,
        ModalComponent,
        ModalRequerimientoComponent,
        ConfigProcesoComponent,
    ],
    providers: [CookieService]
})

export class AdminLayoutModule {
}
