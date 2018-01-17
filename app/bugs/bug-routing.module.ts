//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Components
import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '',  redirectTo: 'bugs', pathMatch: 'full'},
            { path: 'bugs', component: BugListComponent }
        ])
    ],
    exports: [RouterModule]
})
export class BugRoutingModule { }