import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
//const pdfConverter = require("jspdf");

export default class Chart extends Component {
  data = {
    labels: ['10','20','30','40','50','60','70','80','90','100','110','120','130','140','150'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [38.7,
          65.7,
          68.9,
          75.8,
          71.3,
          68.6,
          67.8,
          65.2,
          64.5,
          62.6,
          60.5,
          56.3,
          62.3,
          60.6,
          58.7,
          56.7
          ]
      }
    ]
  };

  div2PDF = e => {
    /////////////////////////////
    // Hide/show button if you need
    /////////////////////////////

    const but = e.target;
    but.style.display = "none";
    let input = window.document.getElementsByClassName("div2PDF")[0];

    html2canvas(input).then(canvas => {
      const img = canvas.toDataURL("image/png");
      //const pdf = new pdfConverter("l", "pt");
      const pdf = new jsPDF();
      pdf.text("Reporte de temperaturas ", 10, 10);
      pdf.addImage(
        img,
        "png",
        input.offsetLeft,
        input.offsetTop,
        //input.clientWidth,
        //input.clientHeight
      );
      pdf.save("chart.pdf");
      but.style.display = "block";
    });
  };

  render () {
    return (
      <div>
        <h3>Compost temperature data</h3>
        <div className="div2PDF">  
          <Line
            id={"ctx"}
            data={this.data}
            width={200}
            height={200}
            options={{ maintainAspectRatio: false }}
          />
        </div><br/>
        <button onClick={e => this.div2PDF(e)}>descargar pdf</button>
      </div>
    );
  }
}