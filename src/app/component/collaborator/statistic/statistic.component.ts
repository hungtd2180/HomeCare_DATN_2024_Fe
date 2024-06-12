import { Component, OnInit } from '@angular/core';
import {StatisticService} from "../../../shared/service/statistic.service";
import {StorageService} from "../../../shared/service/storage.service";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  collaboratorId: string;
  data: any[] = [];
  newCustomer: any[] = []
  pieData: any;
  statusMapping = [
    { status: '1', header: 'Yêu cầu chờ tiếp nhận', background: '#ffdb47', icon: 'pi pi-book', count: 0 },
    { status: '2', header: 'Yêu cầu đang xử lí', background: '#8daaff',icon: 'pi pi-undo', count: 0 },
    { status: '3', header: 'Yêu cầu hoàn tất', background: '#00f200', icon: 'pi pi-check', count: 0 },
    { status: '0', header: 'Yêu cầu bị từ chối', background: '#b2b2b2', icon: 'pi pi-times', count: 0 }
  ];
  constructor(private statisticService: StatisticService,
              private storageService: StorageService,) {
    this.collaboratorId = this.storageService.get('id')
  }

  ngOnInit(): void {
    this.getData()
    this.getCountCustomer()
  }
  getData(): void {
    this.statisticService.getCountStatistic(1, this.collaboratorId).subscribe({
      next: res => {
        this.data = res;
        this.data.forEach( item => {
          const status = this.statusMapping.find(s => s.status === item.statusRequest);
          if (status) {
            status.count = item.count;
          }
        });
        this.prepareChartData()
        console.log(this.statusMapping);
      }
    })
  }
  getCountCustomer(){
    this.statisticService.getNewCustomer(this.collaboratorId).subscribe({
      next: res => {
        this.data = res
        console.log(this.data);
      }
    });
  }
  prepareChartData() {
    const labels = this.statusMapping.map(item => item.header);
    const data = this.statusMapping.map(item => item.count);
    const backgroundColor = this.statusMapping.map(item => item.background);

    this.pieData = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: backgroundColor
        }
      ]
    };
  }
}
