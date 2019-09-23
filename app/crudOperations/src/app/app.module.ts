import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './update-product/update-product.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateProductComponent,
    BasicHighlightDirective,
    HeaderNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    	{path: "", component: HomeComponent},
    	{path: "product", component: ProductComponent},
    	{path: "updateProduct/:id", component: UpdateProductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }