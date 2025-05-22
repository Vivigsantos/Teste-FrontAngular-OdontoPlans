import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

// Testes para o componente HomeComponent
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // Configuração inicial antes de cada teste
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent] // Importa o componente standalone
    })
    .compileComponents();

    // Cria instância do componente e detecta mudanças iniciais
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste básico de criação do componente
  it('deve criar o componente com sucesso', () => {
    expect(component).toBeTruthy(); // Verifica se a instância existe
  });
});
