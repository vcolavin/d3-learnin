import './index.css';

import * as d3 from 'd3';

// here's the initial code:
// https://bl.ocks.org/curran/e30339061fb0dac8dfcfbb57d06715b8

const svg = d3.select('svg').style('background-color', 'black');
const width = parseInt(svg.attr('width'));
const height = parseInt(svg.attr('height'));
const n = 200;
const circles = svg
	.selectAll('circle')
	.data(d3.range(n))
	.enter()
	.append('circle')
	.attr('r', 10)
	.attr('fill', d => `rgba(200,200,200,${d / n})`);

d3.timer(time => {
	circles
		.attr(
			'cy',
			d => (Math.sin(d / 20 + time / 1000) * height) / 4 + height / 2
		)
		.attr(
			'cx',
			d => (Math.cos(d / 20 + (time * 2) / 1000) * width) / 4 + width / 2
		);
});
