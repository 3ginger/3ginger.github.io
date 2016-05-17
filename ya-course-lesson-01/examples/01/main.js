var arr = [1, 2, 3, 4, 5];

d3.select('.content')
    .selectAll('.bar')
    .data(arr)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', function (d) {
        return d*10 + 'px';
    });