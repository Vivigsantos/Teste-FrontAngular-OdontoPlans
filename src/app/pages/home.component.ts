import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interface para definir o formato de um plano
interface Plano {
  nome: string;
  preco: number;
  descricao: string;
}

@Component({
  selector: 'app-home',
  standalone: true, // Componente independente
  imports: [CommonModule, FormsModule], // Módulos necessários para o template
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  busca: string = ''; // Armazena o texto de busca digitado pelo usuário
  filtroPreco: string = ''; // Armazena o critério de ordenação por preço

  // Lista de planos disponíveis
  planos: Plano[] = [
    { nome: 'Plano Bronze', preco: 29.90, descricao: 'Cobertura básica para consultas e exames.' },
    { nome: 'Plano Prata', preco: 49.90, descricao: 'Inclui consultas, exames e limpezas.' },
    { nome: 'Plano Ouro', preco: 79.90, descricao: 'Cobertura completa com ortodontia básica.' },
    { nome: 'Plano Diamante', preco: 99.90, descricao: 'Cobertura premium com ortodontia e estética.' }
  ];

  // Lista de planos filtrados, exibida na tela
  planosFiltrados: Plano[] = [...this.planos];

  // Filtra os planos com base na busca e ordena conforme o filtro de preço
  filtrarPlanos(): void {
    const buscaLower = this.busca.toLowerCase();

    // Filtra os planos pelo nome ou descrição
    this.planosFiltrados = this.planos.filter(plano =>
      plano.nome.toLowerCase().includes(buscaLower) ||
      plano.descricao.toLowerCase().includes(buscaLower)
    );

    this.ordenarPlanos(); // Ordena após filtrar
  }

  // Ordena os planos filtrados pelo preço
  ordenarPlanos(): void {
    if (this.filtroPreco === 'asc') {
      this.planosFiltrados.sort((a, b) => a.preco - b.preco); // Ordem crescente
    } else if (this.filtroPreco === 'desc') {
      this.planosFiltrados.sort((a, b) => b.preco - a.preco); // Ordem decrescente
    }
  }
}
