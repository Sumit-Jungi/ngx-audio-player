import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AudioPlayerComponent } from './component/ngx-audio-player/ngx-audio-player.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [SecondsToMinutesPipe, AudioPlayerComponent],
  imports: [CommonModule, FormsModule, BrowserModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
    MatSliderModule, MatExpansionModule, MatPaginatorModule, MatIconModule, MatMenuModule, MatInputModule,
     MatSortModule],
  exports: [AudioPlayerComponent]
})
export class NgxAudioPlayerModule {
}
