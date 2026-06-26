var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Export_WATUMALANG_1 = new ol.format.GeoJSON();
var features_Export_WATUMALANG_1 = format_Export_WATUMALANG_1.readFeatures(json_Export_WATUMALANG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_WATUMALANG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_WATUMALANG_1.addFeatures(features_Export_WATUMALANG_1);
var lyr_Export_WATUMALANG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_WATUMALANG_1, 
                style: style_Export_WATUMALANG_1,
                popuplayertitle: 'Export_WATUMALANG',
                interactive: true,
    title: 'Export_WATUMALANG<br />\
    <img src="styles/legend/Export_WATUMALANG_1_0.png" /> 0 - 820<br />\
    <img src="styles/legend/Export_WATUMALANG_1_1.png" /> 820 - 879<br />\
    <img src="styles/legend/Export_WATUMALANG_1_2.png" /> 879 - 1201<br />\
    <img src="styles/legend/Export_WATUMALANG_1_3.png" /> 1201 - 1374<br />\
    <img src="styles/legend/Export_WATUMALANG_1_4.png" /> 1374 - 1503<br />\
    <img src="styles/legend/Export_WATUMALANG_1_5.png" /> 1503 - 1555<br />\
    <img src="styles/legend/Export_WATUMALANG_1_6.png" /> 1555 - 1591<br />\
    <img src="styles/legend/Export_WATUMALANG_1_7.png" /> 1591 - 1715<br />\
    <img src="styles/legend/Export_WATUMALANG_1_8.png" /> 1715 - 1840<br />\
    <img src="styles/legend/Export_WATUMALANG_1_9.png" /> 1840 - 1915<br />\
    <img src="styles/legend/Export_WATUMALANG_1_10.png" /> 1915 - 2044<br />\
    <img src="styles/legend/Export_WATUMALANG_1_11.png" /> 2044 - 2232<br />\
    <img src="styles/legend/Export_WATUMALANG_1_12.png" /> 2232 - 2454<br />\
    <img src="styles/legend/Export_WATUMALANG_1_13.png" /> 2454 - 2541<br />\
    <img src="styles/legend/Export_WATUMALANG_1_14.png" /> 2541 - 2638<br />\
    <img src="styles/legend/Export_WATUMALANG_1_15.png" /> 2638 - 3936<br />' });
var format_Point_2 = new ol.format.GeoJSON();
var features_Point_2 = format_Point_2.readFeatures(json_Point_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_2.addFeatures(features_Point_2);
var lyr_Point_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_2, 
                style: style_Point_2,
                popuplayertitle: 'Point',
                interactive: true,
                title: 'Point'
            });
var format_Lines_3 = new ol.format.GeoJSON();
var features_Lines_3 = format_Lines_3.readFeatures(json_Lines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lines_3.addFeatures(features_Lines_3);
var lyr_Lines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lines_3, 
                style: style_Lines_3,
                popuplayertitle: 'Lines',
                interactive: true,
                title: '<img src="styles/legend/Lines_3.png" /> Lines'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Export_WATUMALANG_1.setVisible(true);lyr_Point_2.setVisible(true);lyr_Lines_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Export_WATUMALANG_1,lyr_Point_2,lyr_Lines_3];
lyr_Export_WATUMALANG_1.set('fieldAliases', {'Id': 'Id', 'FID_1': 'FID_1', 'Desa': 'Desa', 'LakiLaki': 'LakiLaki', 'Perempuan': 'Perempuan', 'Jumlah': 'Jumlah', });
lyr_Point_2.set('fieldAliases', {'Id': 'Id', 'FID_1': 'FID_1', 'Desa': 'Desa', 'LakiLaki': 'LakiLaki', 'Perempuan': 'Perempuan', 'Jumlah': 'Jumlah', });
lyr_Lines_3.set('fieldAliases', {'Id': 'Id', 'FID_1': 'FID_1', 'Desa': 'Desa', 'LakiLaki': 'LakiLaki', 'Perempuan': 'Perempuan', 'Jumlah': 'Jumlah', });
lyr_Export_WATUMALANG_1.set('fieldImages', {'Id': 'Range', 'FID_1': 'TextEdit', 'Desa': 'TextEdit', 'LakiLaki': 'TextEdit', 'Perempuan': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_Point_2.set('fieldImages', {'Id': 'Range', 'FID_1': 'TextEdit', 'Desa': 'TextEdit', 'LakiLaki': 'TextEdit', 'Perempuan': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_Lines_3.set('fieldImages', {'Id': '', 'FID_1': '', 'Desa': '', 'LakiLaki': '', 'Perempuan': '', 'Jumlah': '', });
lyr_Export_WATUMALANG_1.set('fieldLabels', {'Id': 'no label', 'FID_1': 'no label', 'Desa': 'no label', 'LakiLaki': 'no label', 'Perempuan': 'inline label - visible with data', 'Jumlah': 'no label', });
lyr_Point_2.set('fieldLabels', {'Id': 'no label', 'FID_1': 'no label', 'Desa': 'no label', 'LakiLaki': 'no label', 'Perempuan': 'no label', 'Jumlah': 'no label', });
lyr_Lines_3.set('fieldLabels', {'Id': 'no label', 'FID_1': 'no label', 'Desa': 'no label', 'LakiLaki': 'no label', 'Perempuan': 'no label', 'Jumlah': 'inline label - always visible', });
lyr_Lines_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});