var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1 = new ol.format.GeoJSON();
var features_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1 = format_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1.readFeatures(json_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1.addFeatures(features_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1);
var lyr_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1, 
                style: style_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1,
                popuplayertitle: "Anexo I - Local de Recebimento e Dispensa do Prático (Entrada Norte)",
                interactive: true,
                title: '<img src="styles/legend/AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1.png" /> Anexo I - Local de Recebimento e Dispensa do Prático (Entrada Norte)'
            });
var format_AnexoIIreadeFundeio2BarraSul_2 = new ol.format.GeoJSON();
var features_AnexoIIreadeFundeio2BarraSul_2 = format_AnexoIIreadeFundeio2BarraSul_2.readFeatures(json_AnexoIIreadeFundeio2BarraSul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIreadeFundeio2BarraSul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIreadeFundeio2BarraSul_2.addFeatures(features_AnexoIIreadeFundeio2BarraSul_2);
var lyr_AnexoIIreadeFundeio2BarraSul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIreadeFundeio2BarraSul_2, 
                style: style_AnexoIIreadeFundeio2BarraSul_2,
                popuplayertitle: "Anexo II - Área de Fundeio 2 (Barra Sul)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIreadeFundeio2BarraSul_2.png" /> Anexo II - Área de Fundeio 2 (Barra Sul)'
            });
var format_AnexoIIIreadeFundeio3BarraSul_3 = new ol.format.GeoJSON();
var features_AnexoIIIreadeFundeio3BarraSul_3 = format_AnexoIIIreadeFundeio3BarraSul_3.readFeatures(json_AnexoIIIreadeFundeio3BarraSul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIreadeFundeio3BarraSul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIreadeFundeio3BarraSul_3.addFeatures(features_AnexoIIIreadeFundeio3BarraSul_3);
var lyr_AnexoIIIreadeFundeio3BarraSul_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIreadeFundeio3BarraSul_3, 
                style: style_AnexoIIIreadeFundeio3BarraSul_3,
                popuplayertitle: "Anexo III - Área de Fundeio 3 (Barra Sul)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIreadeFundeio3BarraSul_3.png" /> Anexo III - Área de Fundeio 3 (Barra Sul)'
            });
var format_AnexoIVreadeFundeio4BarraSul_4 = new ol.format.GeoJSON();
var features_AnexoIVreadeFundeio4BarraSul_4 = format_AnexoIVreadeFundeio4BarraSul_4.readFeatures(json_AnexoIVreadeFundeio4BarraSul_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVreadeFundeio4BarraSul_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVreadeFundeio4BarraSul_4.addFeatures(features_AnexoIVreadeFundeio4BarraSul_4);
var lyr_AnexoIVreadeFundeio4BarraSul_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVreadeFundeio4BarraSul_4, 
                style: style_AnexoIVreadeFundeio4BarraSul_4,
                popuplayertitle: "Anexo IV - Área de Fundeio 4 (Barra Sul)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVreadeFundeio4BarraSul_4.png" /> Anexo IV - Área de Fundeio 4 (Barra Sul)'
            });
var format_AnexoVreadeFundeio5BarraSul_5 = new ol.format.GeoJSON();
var features_AnexoVreadeFundeio5BarraSul_5 = format_AnexoVreadeFundeio5BarraSul_5.readFeatures(json_AnexoVreadeFundeio5BarraSul_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVreadeFundeio5BarraSul_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVreadeFundeio5BarraSul_5.addFeatures(features_AnexoVreadeFundeio5BarraSul_5);
var lyr_AnexoVreadeFundeio5BarraSul_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVreadeFundeio5BarraSul_5, 
                style: style_AnexoVreadeFundeio5BarraSul_5,
                popuplayertitle: "Anexo V - Área de Fundeio 5 (Barra Sul)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVreadeFundeio5BarraSul_5.png" /> Anexo V - Área de Fundeio 5 (Barra Sul)'
            });
var format_AnexoVIPontodeEsperadoprticoEntradaSul_6 = new ol.format.GeoJSON();
var features_AnexoVIPontodeEsperadoprticoEntradaSul_6 = format_AnexoVIPontodeEsperadoprticoEntradaSul_6.readFeatures(json_AnexoVIPontodeEsperadoprticoEntradaSul_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIPontodeEsperadoprticoEntradaSul_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIPontodeEsperadoprticoEntradaSul_6.addFeatures(features_AnexoVIPontodeEsperadoprticoEntradaSul_6);
var lyr_AnexoVIPontodeEsperadoprticoEntradaSul_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIPontodeEsperadoprticoEntradaSul_6, 
                style: style_AnexoVIPontodeEsperadoprticoEntradaSul_6,
                popuplayertitle: "Anexo VI - Ponto de Espera do prático (Entrada Sul)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIPontodeEsperadoprticoEntradaSul_6.png" /> Anexo VI - Ponto de Espera do prático (Entrada Sul)'
            });
var format_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7 = new ol.format.GeoJSON();
var features_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7 = format_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7.readFeatures(json_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7.addFeatures(features_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7);
var lyr_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7, 
                style: style_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7,
                popuplayertitle: "Anexo VII - Poligonal marítima (Contempla os Fundeadouros Barra norte 1, 2, 3 e 4 e o Fundeadouro 1 Barra Sul)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7.png" /> Anexo VII - Poligonal marítima (Contempla os Fundeadouros Barra norte 1, 2, 3 e 4 e o Fundeadouro 1 Barra Sul)'
            });
var format_AnexoVIIIBaciadeEvoluo_8 = new ol.format.GeoJSON();
var features_AnexoVIIIBaciadeEvoluo_8 = format_AnexoVIIIBaciadeEvoluo_8.readFeatures(json_AnexoVIIIBaciadeEvoluo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIIBaciadeEvoluo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIIBaciadeEvoluo_8.addFeatures(features_AnexoVIIIBaciadeEvoluo_8);
var lyr_AnexoVIIIBaciadeEvoluo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIIBaciadeEvoluo_8, 
                style: style_AnexoVIIIBaciadeEvoluo_8,
                popuplayertitle: "Anexo VIII - Bacia de Evolução",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIIBaciadeEvoluo_8.png" /> Anexo VIII - Bacia de Evolução'
            });
var format_AnexoIXPortodeSoSebastiorea1_9 = new ol.format.GeoJSON();
var features_AnexoIXPortodeSoSebastiorea1_9 = format_AnexoIXPortodeSoSebastiorea1_9.readFeatures(json_AnexoIXPortodeSoSebastiorea1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIXPortodeSoSebastiorea1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIXPortodeSoSebastiorea1_9.addFeatures(features_AnexoIXPortodeSoSebastiorea1_9);
var lyr_AnexoIXPortodeSoSebastiorea1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIXPortodeSoSebastiorea1_9, 
                style: style_AnexoIXPortodeSoSebastiorea1_9,
                popuplayertitle: "Anexo IX - Porto de São Sebastião (Área 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIXPortodeSoSebastiorea1_9.png" /> Anexo IX - Porto de São Sebastião (Área 1)'
            });
var format_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10 = new ol.format.GeoJSON();
var features_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10 = format_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10.readFeatures(json_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10.addFeatures(features_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10);
var lyr_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10, 
                style: style_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10,
                popuplayertitle: "Anexo X - Embarque das Balsas e Vias Adjacentes (Área 2) ",
                interactive: true,
                title: '<img src="styles/legend/AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10.png" /> Anexo X - Embarque das Balsas e Vias Adjacentes (Área 2) '
            });
var format_AnexoXIOGMOeANVISArea3_11 = new ol.format.GeoJSON();
var features_AnexoXIOGMOeANVISArea3_11 = format_AnexoXIOGMOeANVISArea3_11.readFeatures(json_AnexoXIOGMOeANVISArea3_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIOGMOeANVISArea3_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIOGMOeANVISArea3_11.addFeatures(features_AnexoXIOGMOeANVISArea3_11);
var lyr_AnexoXIOGMOeANVISArea3_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIOGMOeANVISArea3_11, 
                style: style_AnexoXIOGMOeANVISArea3_11,
                popuplayertitle: "Anexo XI - OGMO e ANVISA (Área 3)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIOGMOeANVISArea3_11.png" /> Anexo XI - OGMO e ANVISA (Área 3)'
            });
var format_AnexoXIIGalpodeManutenorea4_12 = new ol.format.GeoJSON();
var features_AnexoXIIGalpodeManutenorea4_12 = format_AnexoXIIGalpodeManutenorea4_12.readFeatures(json_AnexoXIIGalpodeManutenorea4_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIGalpodeManutenorea4_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIGalpodeManutenorea4_12.addFeatures(features_AnexoXIIGalpodeManutenorea4_12);
var lyr_AnexoXIIGalpodeManutenorea4_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIGalpodeManutenorea4_12, 
                style: style_AnexoXIIGalpodeManutenorea4_12,
                popuplayertitle: "Anexo XII - Galpão de Manutenção (Área 4)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIGalpodeManutenorea4_12.png" /> Anexo XII - Galpão de Manutenção (Área 4)'
            });
var format_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13 = new ol.format.GeoJSON();
var features_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13 = format_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13.readFeatures(json_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13.addFeatures(features_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13);
var lyr_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13, 
                style: style_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13,
                popuplayertitle: "Anexo XIII - Administração do Porto Organizado de São Sebastião (Área 5)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13.png" /> Anexo XIII - Administração do Porto Organizado de São Sebastião (Área 5)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1.setVisible(true);lyr_AnexoIIreadeFundeio2BarraSul_2.setVisible(true);lyr_AnexoIIIreadeFundeio3BarraSul_3.setVisible(true);lyr_AnexoIVreadeFundeio4BarraSul_4.setVisible(true);lyr_AnexoVreadeFundeio5BarraSul_5.setVisible(true);lyr_AnexoVIPontodeEsperadoprticoEntradaSul_6.setVisible(true);lyr_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7.setVisible(true);lyr_AnexoVIIIBaciadeEvoluo_8.setVisible(true);lyr_AnexoIXPortodeSoSebastiorea1_9.setVisible(true);lyr_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10.setVisible(true);lyr_AnexoXIOGMOeANVISArea3_11.setVisible(true);lyr_AnexoXIIGalpodeManutenorea4_12.setVisible(true);lyr_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1,lyr_AnexoIIreadeFundeio2BarraSul_2,lyr_AnexoIIIreadeFundeio3BarraSul_3,lyr_AnexoIVreadeFundeio4BarraSul_4,lyr_AnexoVreadeFundeio5BarraSul_5,lyr_AnexoVIPontodeEsperadoprticoEntradaSul_6,lyr_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7,lyr_AnexoVIIIBaciadeEvoluo_8,lyr_AnexoIXPortodeSoSebastiorea1_9,lyr_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10,lyr_AnexoXIOGMOeANVISArea3_11,lyr_AnexoXIIGalpodeManutenorea4_12,lyr_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13];
lyr_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIreadeFundeio2BarraSul_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIIreadeFundeio3BarraSul_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVreadeFundeio4BarraSul_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVreadeFundeio5BarraSul_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIPontodeEsperadoprticoEntradaSul_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIIBaciadeEvoluo_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIXPortodeSoSebastiorea1_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIOGMOeANVISArea3_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIGalpodeManutenorea4_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIreadeFundeio2BarraSul_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIIreadeFundeio3BarraSul_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVreadeFundeio4BarraSul_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVreadeFundeio5BarraSul_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIPontodeEsperadoprticoEntradaSul_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIIBaciadeEvoluo_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIXPortodeSoSebastiorea1_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIOGMOeANVISArea3_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIGalpodeManutenorea4_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoILocaldeRecebimentoeDispensadoPrticoEntradaNorte_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIreadeFundeio2BarraSul_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIIreadeFundeio3BarraSul_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVreadeFundeio4BarraSul_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVreadeFundeio5BarraSul_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIPontodeEsperadoprticoEntradaSul_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIPoligonalmartimaContemplaosFundeadourosBarranorte123e4eoFundeadouro1BarraSul_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIIBaciadeEvoluo_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIXPortodeSoSebastiorea1_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXEmbarquedasBalsaseViasAdjacentesrea2_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIOGMOeANVISArea3_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIGalpodeManutenorea4_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIIAdministraodoPortoOrganizadodeSoSebastiorea5_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});