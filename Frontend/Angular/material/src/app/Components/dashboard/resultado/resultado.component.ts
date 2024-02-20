import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Resultado } from 'src/app/interfaces/resultado';
import { ResultadosService } from 'src/app/services/resultado.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'] 
})
export class ResultadosComponent implements OnInit {
  datosGrafica = {
    labels: ['Partido de la u', 'Alianza de Popayan ', 'Pacto Historico '],
    datasets: [{
      label: 'Número de Mesas',
      data: [10, 5, 8],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    }]
  };

  ngOnInit() {
    this.crearGraficaRadar();
  }

  crearGraficaRadar() {
    const ctx = document.getElementById('GraficaRadar') as HTMLCanvasElement;
    const myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: this.datosGrafica,
      options: {
        scales: {
          r: {
            beginAtZero: true,
          }
        }
      }
    });
  }
}