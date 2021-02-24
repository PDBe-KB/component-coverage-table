import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageTableComponent } from './coverage-table.component';

const TEST_DATA: any = {
  tracks: [
    {
      data: [
        {
          accession: 'accession',
          label: [
            {
              resolution: 'resolution',
              icons: [
                {
                  url: 'url',
                  type: 'experiments',
                  background: 'background'
                }
              ]
            }
          ],
          locations: [
            {
              fragments: [
                {
                  start: 'start',
                  end: 'end'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

describe('CoverageTableComponent', () => {
  let component: CoverageTableComponent;
  let fixture: ComponentFixture<CoverageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageTableComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageTableComponent);
    component = fixture.componentInstance;
    component.data = TEST_DATA;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('showAll() should work', () => {
    component.showAll();
    expect(component.viewLimit).toBe(1);
  });

  it('showLess() should work', () => {
    component.showLess();
    expect(component.viewLimit).toBe(component.defaultViewLimit);
  });

  it('getClass() should work', () => {
    expect(component.getClass(component.data['tracks'][0]['data'][0]['label'][0]['icons'][0])).toBeTruthy();
  });

  it('getSymbol() should work', () => {
    expect(component.getSymbol(component.data['tracks'][0]['data'][0]['label'][0]['icons'][0])).toBeTruthy();
  });

  it('getStyle() should work', () => {
    expect(component.getStyle(component.data['tracks'][0]['data'][0]['label'][0]['icons'][0])).toBeTruthy();
  });
});
