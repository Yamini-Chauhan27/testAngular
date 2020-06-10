import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { N2wPipe } from './n2w/n2w.pipe';

@NgModule({
   declarations: [
      AppComponent,
      TestComponent,
      N2wPipe
   ],
   imports: [
      BrowserModule,
      FormsModule,
   ],
   providers: [N2wPipe],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
