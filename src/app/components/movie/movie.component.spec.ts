import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie.component';
import { MovieService }  from '../../services/movie.service';
import { HttpClientModule}  from '@angular/common/http';
import { By } from '@angular/platform-browser';



describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule ],
      declarations: [ MovieComponent ],
      providers:[MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call search on ngOninit', ()=> {
    spyOn(component, 'search');
    component.ngOnInit();
    expect(component.search).toHaveBeenCalled();
  })

//   it('should call previous on click of previous link', () => {
//     spyOn(component, 'previous');
//     let link = fixture.debugElement.nativeElement.querySelector('page-link');
//     console.log(fixture.debugElement.query(By.css('page-link')));
//     link.click();

//     fixture.whenStable().then(() => {
//     expect(component.previous).toHaveBeenCalled();
//   })
// })
});
