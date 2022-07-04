import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NtfsComponent } from './components/pages/ntfs/ntfs.component';
import { NftCardComponent } from './components/organisms/nft-card/nft-card.component';
import { CardImageComponent } from './components/atoms/card-image/card-image.component';
import { CardBodyComponent } from './components/molecules/card-body/card-body.component';
import { CardFooterComponent } from './components/molecules/card-footer/card-footer.component';
import { CardTitleComponent } from './components/atoms/card-title/card-title.component';
import { IconImgComponent } from './components/atoms/icon-img/icon-img.component';
import { AvatarComponent } from './components/atoms/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    NtfsComponent,
    NftCardComponent,
    CardImageComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardTitleComponent,
    IconImgComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
