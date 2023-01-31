import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArtistsComponent } from './detail-artists.component';

describe('DetailArtistsComponent', () => {
  let component: DetailArtistsComponent;
  let fixture: ComponentFixture<DetailArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArtistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
