import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { httpInterceptorProviders } from './http-interceptors'

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'
import { RootStoreModule } from './root-store/root-store.module';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd'
/** angular i18n */
import { registerLocaleData, APP_BASE_HREF} from '@angular/common'
import zh from '@angular/common/locales/zh';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { config } from 'src/config/config.dev';

registerLocaleData(zh)


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
    }),
    RootStoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    httpInterceptorProviders,
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: APP_BASE_HREF, useValue: config.deployUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
