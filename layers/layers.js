var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionSilao_3 = new ol.format.GeoJSON();
var features_CoordinacionSilao_3 = format_CoordinacionSilao_3.readFeatures(json_CoordinacionSilao_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSilao_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSilao_3.addFeatures(features_CoordinacionSilao_3);
var lyr_CoordinacionSilao_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSilao_3, 
                style: style_CoordinacionSilao_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSilao_3.png" /> Coordinacion Silao'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionSI5_5 = new ol.format.GeoJSON();
var features_MicroregionSI5_5 = format_MicroregionSI5_5.readFeatures(json_MicroregionSI5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSI5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSI5_5.addFeatures(features_MicroregionSI5_5);
var lyr_MicroregionSI5_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSI5_5, 
                style: style_MicroregionSI5_5,
                interactive: false,
    title: 'Microregion SI5<br />\
    <img src="styles/legend/MicroregionSI5_5_0.png" /> 3 - 57 Personas<br />\
    <img src="styles/legend/MicroregionSI5_5_1.png" /> 57 - 166 Personas<br />\
    <img src="styles/legend/MicroregionSI5_5_2.png" /> 166 - 306 Personas<br />\
    <img src="styles/legend/MicroregionSI5_5_3.png" /> 306 - 504 Personas<br />\
    <img src="styles/legend/MicroregionSI5_5_4.png" /> 504 - 700 Personas<br />'
        });
var format_MicroregionSI4_6 = new ol.format.GeoJSON();
var features_MicroregionSI4_6 = format_MicroregionSI4_6.readFeatures(json_MicroregionSI4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSI4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSI4_6.addFeatures(features_MicroregionSI4_6);
var lyr_MicroregionSI4_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSI4_6, 
                style: style_MicroregionSI4_6,
                interactive: false,
    title: 'Microregion SI4<br />\
    <img src="styles/legend/MicroregionSI4_6_0.png" /> 0 - 3 Personas<br />\
    <img src="styles/legend/MicroregionSI4_6_1.png" /> 3 - 12 Personas<br />\
    <img src="styles/legend/MicroregionSI4_6_2.png" /> 12 - 24 Personas<br />\
    <img src="styles/legend/MicroregionSI4_6_3.png" /> 24 - 36 Personas<br />\
    <img src="styles/legend/MicroregionSI4_6_4.png" /> 36 - 62 Personas<br />'
        });
var format_MicroregionSI3_7 = new ol.format.GeoJSON();
var features_MicroregionSI3_7 = format_MicroregionSI3_7.readFeatures(json_MicroregionSI3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSI3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSI3_7.addFeatures(features_MicroregionSI3_7);
var lyr_MicroregionSI3_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSI3_7, 
                style: style_MicroregionSI3_7,
                interactive: false,
    title: 'Microregion SI3<br />\
    <img src="styles/legend/MicroregionSI3_7_0.png" /> 1 - 49 Personas<br />\
    <img src="styles/legend/MicroregionSI3_7_1.png" /> 49 - 128 Personas<br />\
    <img src="styles/legend/MicroregionSI3_7_2.png" /> 128 - 229 Personas<br />\
    <img src="styles/legend/MicroregionSI3_7_3.png" /> 229 - 461 Personas<br />\
    <img src="styles/legend/MicroregionSI3_7_4.png" /> 461 - 674 Personas<br />'
        });
var format_MicroregionSI2_8 = new ol.format.GeoJSON();
var features_MicroregionSI2_8 = format_MicroregionSI2_8.readFeatures(json_MicroregionSI2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSI2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSI2_8.addFeatures(features_MicroregionSI2_8);
var lyr_MicroregionSI2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSI2_8, 
                style: style_MicroregionSI2_8,
                interactive: false,
    title: 'Microregion SI2<br />\
    <img src="styles/legend/MicroregionSI2_8_0.png" /> 2 - 24 Personas<br />\
    <img src="styles/legend/MicroregionSI2_8_1.png" /> 24 - 56 Personas<br />\
    <img src="styles/legend/MicroregionSI2_8_2.png" /> 56 - 104 Personas<br />\
    <img src="styles/legend/MicroregionSI2_8_3.png" /> 104 - 166 Personas<br />\
    <img src="styles/legend/MicroregionSI2_8_4.png" /> 166 - 360 Personas<br />'
        });
var format_MicroregionSI1_9 = new ol.format.GeoJSON();
var features_MicroregionSI1_9 = format_MicroregionSI1_9.readFeatures(json_MicroregionSI1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSI1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSI1_9.addFeatures(features_MicroregionSI1_9);
var lyr_MicroregionSI1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSI1_9, 
                style: style_MicroregionSI1_9,
                interactive: false,
    title: 'Microregion SI1<br />\
    <img src="styles/legend/MicroregionSI1_9_0.png" /> 3 - 13 Personas<br />\
    <img src="styles/legend/MicroregionSI1_9_1.png" /> 13 - 26 Personas<br />\
    <img src="styles/legend/MicroregionSI1_9_2.png" /> 26 - 45 Personas<br />\
    <img src="styles/legend/MicroregionSI1_9_3.png" /> 45 - 70 Personas<br />\
    <img src="styles/legend/MicroregionSI1_9_4.png" /> 70 - 125 Personas<br />'
        });
var format_MicroregionROM2_10 = new ol.format.GeoJSON();
var features_MicroregionROM2_10 = format_MicroregionROM2_10.readFeatures(json_MicroregionROM2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionROM2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionROM2_10.addFeatures(features_MicroregionROM2_10);
var lyr_MicroregionROM2_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionROM2_10, 
                style: style_MicroregionROM2_10,
                interactive: false,
    title: 'Microregion ROM2<br />\
    <img src="styles/legend/MicroregionROM2_10_0.png" /> 1 - 48 Personas<br />\
    <img src="styles/legend/MicroregionROM2_10_1.png" /> 48 - 141 Personas<br />\
    <img src="styles/legend/MicroregionROM2_10_2.png" /> 141 - 221 Personas<br />\
    <img src="styles/legend/MicroregionROM2_10_3.png" /> 221 - 383 Personas<br />\
    <img src="styles/legend/MicroregionROM2_10_4.png" /> 383 - 628 Personas<br />'
        });
var format_MicroregionROM1_11 = new ol.format.GeoJSON();
var features_MicroregionROM1_11 = format_MicroregionROM1_11.readFeatures(json_MicroregionROM1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionROM1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionROM1_11.addFeatures(features_MicroregionROM1_11);
var lyr_MicroregionROM1_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionROM1_11, 
                style: style_MicroregionROM1_11,
                interactive: false,
    title: 'Microregion ROM1<br />\
    <img src="styles/legend/MicroregionROM1_11_0.png" /> 3 - 18 Personas<br />\
    <img src="styles/legend/MicroregionROM1_11_1.png" /> 18 - 40 Personas<br />\
    <img src="styles/legend/MicroregionROM1_11_2.png" /> 40 - 102 Personas<br />\
    <img src="styles/legend/MicroregionROM1_11_3.png" /> 102 - 359 Personas<br />\
    <img src="styles/legend/MicroregionROM1_11_4.png" /> 359 - 668 Personas<br />'
        });
var format_MicroregionGT4_12 = new ol.format.GeoJSON();
var features_MicroregionGT4_12 = format_MicroregionGT4_12.readFeatures(json_MicroregionGT4_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionGT4_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionGT4_12.addFeatures(features_MicroregionGT4_12);
var lyr_MicroregionGT4_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionGT4_12, 
                style: style_MicroregionGT4_12,
                interactive: false,
    title: 'Microregion GT4<br />\
    <img src="styles/legend/MicroregionGT4_12_0.png" /> 2 - 31 Personas<br />\
    <img src="styles/legend/MicroregionGT4_12_1.png" /> 31 - 84 Personas<br />\
    <img src="styles/legend/MicroregionGT4_12_2.png" /> 84 - 197 Personas<br />\
    <img src="styles/legend/MicroregionGT4_12_3.png" /> 197 - 317 Personas<br />\
    <img src="styles/legend/MicroregionGT4_12_4.png" /> 317 - 439 Personas<br />'
        });
var format_MicroregionGT3_13 = new ol.format.GeoJSON();
var features_MicroregionGT3_13 = format_MicroregionGT3_13.readFeatures(json_MicroregionGT3_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionGT3_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionGT3_13.addFeatures(features_MicroregionGT3_13);
var lyr_MicroregionGT3_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionGT3_13, 
                style: style_MicroregionGT3_13,
                interactive: false,
    title: 'Microregion GT3<br />\
    <img src="styles/legend/MicroregionGT3_13_0.png" /> 2 - 25 Personas<br />\
    <img src="styles/legend/MicroregionGT3_13_1.png" /> 25 - 71 Personas<br />\
    <img src="styles/legend/MicroregionGT3_13_2.png" /> 71 - 166 Personas<br />\
    <img src="styles/legend/MicroregionGT3_13_3.png" /> 166 - 358 Personas<br />\
    <img src="styles/legend/MicroregionGT3_13_4.png" /> 358 - 447 Personas<br />'
        });
var format_MicroregionGT2_14 = new ol.format.GeoJSON();
var features_MicroregionGT2_14 = format_MicroregionGT2_14.readFeatures(json_MicroregionGT2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionGT2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionGT2_14.addFeatures(features_MicroregionGT2_14);
var lyr_MicroregionGT2_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionGT2_14, 
                style: style_MicroregionGT2_14,
                interactive: false,
    title: 'Microregion GT2<br />\
    <img src="styles/legend/MicroregionGT2_14_0.png" /> 1 - 14 Personas<br />\
    <img src="styles/legend/MicroregionGT2_14_1.png" /> 14 - 43 Personas<br />\
    <img src="styles/legend/MicroregionGT2_14_2.png" /> 43 - 109 Personas<br />\
    <img src="styles/legend/MicroregionGT2_14_3.png" /> 109 - 227 Personas<br />\
    <img src="styles/legend/MicroregionGT2_14_4.png" /> 227 - 336 Personas<br />'
        });
var format_MicroregionGT1_15 = new ol.format.GeoJSON();
var features_MicroregionGT1_15 = format_MicroregionGT1_15.readFeatures(json_MicroregionGT1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionGT1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionGT1_15.addFeatures(features_MicroregionGT1_15);
var lyr_MicroregionGT1_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionGT1_15, 
                style: style_MicroregionGT1_15,
                interactive: false,
    title: 'Microregion GT1<br />\
    <img src="styles/legend/MicroregionGT1_15_0.png" /> 3 - 8 Personas<br />\
    <img src="styles/legend/MicroregionGT1_15_1.png" /> 8 - 16 Personas<br />\
    <img src="styles/legend/MicroregionGT1_15_2.png" /> 16 - 30 Personas<br />\
    <img src="styles/legend/MicroregionGT1_15_3.png" /> 30 - 60 Personas<br />\
    <img src="styles/legend/MicroregionGT1_15_4.png" /> 60 - 102 Personas<br />'
        });
var format_CoordinacionSilao_16 = new ol.format.GeoJSON();
var features_CoordinacionSilao_16 = format_CoordinacionSilao_16.readFeatures(json_CoordinacionSilao_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSilao_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSilao_16.addFeatures(features_CoordinacionSilao_16);
var lyr_CoordinacionSilao_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSilao_16, 
                style: style_CoordinacionSilao_16,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionSilao_16.png" /> Coordinacion Silao'
            });
var group_CoordinacionSilaoRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionSI5_5,lyr_MicroregionSI4_6,lyr_MicroregionSI3_7,lyr_MicroregionSI2_8,lyr_MicroregionSI1_9,lyr_MicroregionROM2_10,lyr_MicroregionROM1_11,lyr_MicroregionGT4_12,lyr_MicroregionGT3_13,lyr_MicroregionGT2_14,lyr_MicroregionGT1_15,],
                                title: "Coordinacion Silao Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionSilao_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionSilao_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionSI5_5.setVisible(true);lyr_MicroregionSI4_6.setVisible(true);lyr_MicroregionSI3_7.setVisible(true);lyr_MicroregionSI2_8.setVisible(true);lyr_MicroregionSI1_9.setVisible(true);lyr_MicroregionROM2_10.setVisible(true);lyr_MicroregionROM1_11.setVisible(true);lyr_MicroregionGT4_12.setVisible(true);lyr_MicroregionGT3_13.setVisible(true);lyr_MicroregionGT2_14.setVisible(true);lyr_MicroregionGT1_15.setVisible(true);lyr_CoordinacionSilao_16.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionSilaoRezago,lyr_CoordinacionSilao_16];
lyr_CoordinacionSilao_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionSI5_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSI4_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSI3_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSI2_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSI1_9.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionROM2_10.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionROM1_11.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionGT4_12.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionGT3_13.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionGT2_14.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionGT1_15.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_CoordinacionSilao_16.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionSilao_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionSI5_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSI4_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSI3_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSI2_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSI1_9.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionROM2_10.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionROM1_11.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionGT4_12.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionGT3_13.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionGT2_14.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionGT1_15.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionSilao_16.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionSilao_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionSI5_5.set('fieldLabels', {});
lyr_MicroregionSI4_6.set('fieldLabels', {});
lyr_MicroregionSI3_7.set('fieldLabels', {});
lyr_MicroregionSI2_8.set('fieldLabels', {});
lyr_MicroregionSI1_9.set('fieldLabels', {});
lyr_MicroregionROM2_10.set('fieldLabels', {});
lyr_MicroregionROM1_11.set('fieldLabels', {});
lyr_MicroregionGT4_12.set('fieldLabels', {});
lyr_MicroregionGT3_13.set('fieldLabels', {});
lyr_MicroregionGT2_14.set('fieldLabels', {});
lyr_MicroregionGT1_15.set('fieldLabels', {});
lyr_CoordinacionSilao_16.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionSilao_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});