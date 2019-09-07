import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{NgxEditorModule } from 'ngx-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from '.././app/User/signup/signup.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LogInComponent } from '.././app/User/log-in/log-in.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { SearchPipe } from './Pipes/search.pipe';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { ViewIssueComponent } from './view-issue/view-issue.component';
import { AssignedIssueComponent } from './assigned-issue/assigned-issue.component';
import { ReportedComponent } from './reported/reported.component';
import{IssueRouteGaurdService} from './issue-route-gaurd.service'
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("591838160370-2d8vnf04agnber0nrjb26j6t5rr4f6hi.apps.googleusercontent.com")
        },
          
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LogInComponent,
    SearchPipe,
    CreateIssueComponent,
    EditIssueComponent,
    ViewIssueComponent,
    AssignedIssueComponent,
    ReportedComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxEditorModule,

    ToastrModule.forRoot({
      preventDuplicates:true
    }),
    SocialLoginModule,
    RouterModule.forRoot([
      
      {path:'signup',component:SignupComponent},
      {path:'',redirectTo:'signup',pathMatch:'full'},

      {path:'login',component:LogInComponent},
      {path:'home',component:HomeComponent,canActivate:[IssueRouteGaurdService]},
      {path:'create',component:CreateIssueComponent,canActivate:[IssueRouteGaurdService]},
      {path:':id/edit',component:EditIssueComponent,canActivate:[IssueRouteGaurdService]},
      {path:':id/view',component:ViewIssueComponent,canActivate:[IssueRouteGaurdService]},
      {path:'assign',component:AssignedIssueComponent,canActivate:[IssueRouteGaurdService]},
      {path:'reported',component:ReportedComponent,canActivate:[IssueRouteGaurdService]}
    ])
  ],
  providers: [    { provide: AuthServiceConfig, useFactory: getAuthServiceConfigs }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
