import $, { event } from "jquery";
import 'bootstrap';
import "slick-carousel";
import "select2";
import './styles/index.scss';

const body = document.querySelector("body"),
    sidebar = body.querySelector("nav"),
    sidebarToggle = body.querySelector(".sidebar-toggle");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})    

import ApexCharts from 'apexcharts'
		

var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };
var chart = new ApexCharts(document.querySelector("#chart"), options);
if (chart.el) {
  chart.render();
}


// НАСТРОЙКА ЦВЕТА СЕРДЕЧКА
$( ".tumble" ).on('click', function() {
  $(this).toggleClass( "active")
});

$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});