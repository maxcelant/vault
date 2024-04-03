---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
var a = 1;
print a; ^1B63MwsH

tokenized ^y2GLsI81

var ^PAO4VthW

a ^QkZRrCKd

= ^6IJbbRl0

1 ^tchxb6jn

; ^FK1xaG4R

print ^oWwYHgqh

a ^lIMTMyWd

; ^gmbhDQsr

EOF ^X6HLW7Q3

This is actually a Token ^V3BSxfA5

initializer ^CCIb3M8q

Stmt.Var(name='a', initializer=Expr.Literal(1)) ^xWTeW9iq

print_statement() ^c0rQHNDW

value ^CbqKtkX6

Expr.Variable('a') ^M5K8GHTf

Stmt.Print(expression=Expr.Variable('a')) ^Yzef3fSr

Stmt.Var(name='a', initializer=Expr.Literal(1)) ^zCNRNi5A

Stmt.Print(expression=Expr.Variable('a')) ^6tXUj8uN

Creates a list of statements ^0h47pdO7

1 ^cVwrrkyJ

List of tokens ^P0Y0Su1f

Raw Code ^W9KKLBxI

1 ^3HKvrpbj

2 ^IurBBTVM

3.1 ^FhMmAL19

3.2 ^ns5WVykT

4 ^7dEHwwU2


 Each statement (separated by a semicolon) is constructed separately, and then they are all added to a statements list. ^KYiI8mtx

0 ^i1RUqoYi

Stmt.Var(name='a', initializer=Expr.Literal(1)) ^YORrzFXA

0 ^8qnE36Ok

Stmt.Print(expression=Expr.Variable('a')) ^w1xN5dOw

1 ^rkPpM2FB

visit_var_stmt(stmt):
  value = evaluate(stmt.initializer) ^vfwzbiAw

evaluate(expr):
  return expr.accept(self) ^LFLzAai0

visit_literal_expr(expr):
  return expr.value ^205c3IQK

1 ^wBdLs0y5

environment.define(stmt.name, value) ^pjaeB71w

We grab that literal and stick it in the environments dict ^bHEZXVfT

5 ^0OQRNt08

visit_print_stmt(stmt):
  value = evaluate(stmt.expression)
  print(stringify(value)) ^YDylA5Xw

evaluate(expr):
  return expr.accept(self) ^vgnjq7ZK

visit_var_expr(expr):
  return environment.get(expr.name) ^YVkElyZt

returns 1 ^jnVXFMRs

Environment Store ^Sv4lRJKq

a: 1 ^gd04fUql

6 ^yKCxY2v6

Flow for Variable Declaration and Print ^PCsya8zL

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.0.17",
	"elements": [
		{
			"id": "Rzo3w_nYbkRGwONG7vESy",
			"type": "rectangle",
			"x": -315.4279187759482,
			"y": 812.3635635512356,
			"width": 404.3190705396546,
			"height": 391.90696547478274,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1956582661,
			"version": 238,
			"versionNonce": 969942251,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1711911865966,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 885,
			"versionNonce": 1618505285,
			"isDeleted": false,
			"id": "OwwGaa8flVpKD_2a6c7E6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 322.82521819031365,
			"y": 815.3958929895291,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 464.79417913220146,
			"height": 96.21668603041485,
			"seed": 1822029355,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1711908855882,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 683,
			"versionNonce": 1952904779,
			"isDeleted": false,
			"id": "Xy9nPuXpgTQMH7ftCDMil",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 846.2295312870388,
			"y": 557.4489393991535,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 350.33697298385334,
			"height": 97.4082647194815,
			"seed": 1377485611,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "aBSmp7RHMvdXSL40i2ur1",
					"type": "arrow"
				}
			],
			"updated": 1711908844467,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 669,
			"versionNonce": 862127269,
			"isDeleted": false,
			"id": "fkzPxrPXSK6Dp0bL6Rrwt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 264.193823701084,
			"y": 393.0597104779795,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 437.017600132989,
			"height": 108.0685966726986,
			"seed": 1968627109,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1711908702937,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 645,
			"versionNonce": 916306155,
			"isDeleted": false,
			"id": "_RjUzP6UjmGIBLcT0GIbU",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -705.3041548071677,
			"y": 723.9207455071901,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 350.33697298385334,
			"height": 97.4082647194815,
			"seed": 523352875,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1711908602662,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 503,
			"versionNonce": 113770987,
			"isDeleted": false,
			"id": "jgd5UwOy289E23CaW0MjV",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -397.85460708737105,
			"y": 544.1548814274912,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 350.33697298385334,
			"height": 97.4082647194815,
			"seed": 1802372491,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1711908730345,
			"link": null,
			"locked": false
		},
		{
			"id": "6RIuJVBa7vBzt5rCWtVA5",
			"type": "rectangle",
			"x": -866.5345728772708,
			"y": 394.6147205467265,
			"width": 471.90752110828157,
			"height": 117.37195981201819,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1456021701,
			"version": 170,
			"versionNonce": 1366571653,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908580245,
			"link": null,
			"locked": false
		},
		{
			"id": "95p4Z7owWdgtgUBLxETQD",
			"type": "rectangle",
			"x": -530.8887939453125,
			"y": -527.3496653077526,
			"width": 172.50695800781247,
			"height": 104.15288543701172,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1513594475,
			"version": 153,
			"versionNonce": 1997432709,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "wJvqryELFf6MfefAciAOP",
					"type": "arrow"
				}
			],
			"updated": 1711908201894,
			"link": null,
			"locked": false
		},
		{
			"id": "1B63MwsH",
			"type": "text",
			"x": -497.0478515625,
			"y": -507.22496032714844,
			"width": 98.65995788574219,
			"height": 50,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1907992325,
			"version": 85,
			"versionNonce": 353468235,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "var a = 1;\nprint a;",
			"rawText": "var a = 1;\nprint a;",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 42,
			"containerId": null,
			"originalText": "var a = 1;\nprint a;",
			"lineHeight": 1.25
		},
		{
			"id": "wJvqryELFf6MfefAciAOP",
			"type": "arrow",
			"x": -334.82537841796875,
			"y": -478.7719023888789,
			"width": 197.92889404296875,
			"height": 13.806783980675789,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1168085061,
			"version": 119,
			"versionNonce": 507588325,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "y2GLsI81"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					197.92889404296875,
					13.806783980675789
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "95p4Z7owWdgtgUBLxETQD",
				"focus": -0.19208133797712454,
				"gap": 23.55645751953125
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "y2GLsI81",
			"type": "text",
			"x": -281.1308822631836,
			"y": -484.6710891723633,
			"width": 90.53990173339844,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1645832549,
			"version": 31,
			"versionNonce": 1155096043,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "tokenized",
			"rawText": "tokenized",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 17,
			"containerId": "wJvqryELFf6MfefAciAOP",
			"originalText": "tokenized",
			"lineHeight": 1.25
		},
		{
			"id": "ivlb2_rT5hLZNRraJB29y",
			"type": "rectangle",
			"x": -126.47686767578125,
			"y": -492.23998260498047,
			"width": 57.4852294921875,
			"height": 53.95494842529297,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1518864683,
			"version": 92,
			"versionNonce": 375654981,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "PAO4VthW"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"id": "PAO4VthW",
			"type": "text",
			"x": -113.93424224853516,
			"y": -477.762508392334,
			"width": 32.39997863769531,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 390815179,
			"version": 15,
			"versionNonce": 2037147787,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "var",
			"rawText": "var",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 17,
			"containerId": "ivlb2_rT5hLZNRraJB29y",
			"originalText": "var",
			"lineHeight": 1.25
		},
		{
			"type": "rectangle",
			"version": 145,
			"versionNonce": 1884584357,
			"isDeleted": false,
			"id": "oxQt6QpFBiGVaasvxeZLh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -56.756103515625,
			"y": -494.13215255737305,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.4852294921875,
			"height": 53.95494842529297,
			"seed": 1314915173,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "QkZRrCKd"
				},
				{
					"id": "qJSqRGXl4rK5V5-3gS0jE",
					"type": "arrow"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 68,
			"versionNonce": 1216683819,
			"isDeleted": false,
			"id": "QkZRrCKd",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -34.68348693847656,
			"y": -479.65467834472656,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 13.339996337890625,
			"height": 25,
			"seed": 1957973701,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "a",
			"rawText": "a",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "oxQt6QpFBiGVaasvxeZLh",
			"originalText": "a",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 143,
			"versionNonce": 1161821445,
			"isDeleted": false,
			"id": "9m7T2dzX0qyo0eBz89_F5",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 14.4210205078125,
			"y": -491.9046440124512,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.4852294921875,
			"height": 53.95494842529297,
			"seed": 2085219595,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "6IJbbRl0"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 67,
			"versionNonce": 747504075,
			"isDeleted": false,
			"id": "6IJbbRl0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 36.99363708496094,
			"y": -477.4271697998047,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 12.339996337890625,
			"height": 25,
			"seed": 238949291,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "=",
			"rawText": "=",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "9m7T2dzX0qyo0eBz89_F5",
			"originalText": "=",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 179,
			"versionNonce": 748950629,
			"isDeleted": false,
			"id": "GsYo2yQtCeGlD2XE8oAo2",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 88.5185546875,
			"y": -492.83044052124023,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.4852294921875,
			"height": 53.95494842529297,
			"seed": 1556392453,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "tchxb6jn"
				},
				{
					"id": "ZVhyKOlaxtMQHlAZexnBl",
					"type": "arrow"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 102,
			"versionNonce": 1856082027,
			"isDeleted": false,
			"id": "tchxb6jn",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 114.5511703491211,
			"y": -478.35296630859375,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 688595301,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "GsYo2yQtCeGlD2XE8oAo2",
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 237,
			"versionNonce": 1917730757,
			"isDeleted": false,
			"id": "Ep7xPmy6Y0gbwvEmfahD-",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 159.735107421875,
			"y": -496.9599723815918,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.4852294921875,
			"height": 53.95494842529297,
			"seed": 910118635,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "FK1xaG4R"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 163,
			"versionNonce": 1351240459,
			"isDeleted": false,
			"id": "FK1xaG4R",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 185.8977279663086,
			"y": -482.4824981689453,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 5.1599884033203125,
			"height": 25,
			"seed": 183253387,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": ";",
			"rawText": ";",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Ep7xPmy6Y0gbwvEmfahD-",
			"originalText": ";",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 460,
			"versionNonce": 207355685,
			"isDeleted": false,
			"id": "s5gSfoAZ1bap6H6_myyp9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 513.784423828125,
			"y": -559.6676902770996,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.4852294921875,
			"height": 53.95494842529297,
			"seed": 809704293,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "oWwYHgqh"
				},
				{
					"id": "uPTfhOr-5RrlIX0mjqP1J",
					"type": "arrow"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 387,
			"versionNonce": 1992470955,
			"isDeleted": false,
			"id": "oWwYHgqh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 520.7870635986328,
			"y": -545.1902160644531,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 43.479949951171875,
			"height": 25,
			"seed": 1517577925,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "print",
			"rawText": "print",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "s5gSfoAZ1bap6H6_myyp9",
			"originalText": "print",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 520,
			"versionNonce": 1362809477,
			"isDeleted": false,
			"id": "JaoW-7WlZvLvymV8m9xtZ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 579.0946044921875,
			"y": -559.6887168884277,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.4852294921875,
			"height": 53.95494842529297,
			"seed": 729892843,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "lIMTMyWd"
				},
				{
					"id": "vdWFOvArhozEiNVMfoiTn",
					"type": "arrow"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 444,
			"versionNonce": 309675083,
			"isDeleted": false,
			"id": "lIMTMyWd",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 601.1672210693359,
			"y": -545.2112426757812,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 13.339996337890625,
			"height": 25,
			"seed": 1468469899,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "a",
			"rawText": "a",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "JaoW-7WlZvLvymV8m9xtZ",
			"originalText": "a",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 479,
			"versionNonce": 1839741413,
			"isDeleted": false,
			"id": "j6-hIUKfFkR3A8M4jgdnb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 644.00390625,
			"y": -560.080135345459,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.4852294921875,
			"height": 53.95494842529297,
			"seed": 1710806181,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "gmbhDQsr"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 403,
			"versionNonce": 1266451179,
			"isDeleted": false,
			"id": "gmbhDQsr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 670.1665267944336,
			"y": -545.6026611328125,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 5.1599884033203125,
			"height": 25,
			"seed": 1537275909,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": ";",
			"rawText": ";",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "j6-hIUKfFkR3A8M4jgdnb",
			"originalText": ";",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 536,
			"versionNonce": 447853893,
			"isDeleted": false,
			"id": "LHF4FTbCezqiVqzeFtShi",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 713.861328125,
			"y": -561.356258392334,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.4852294921875,
			"height": 53.95494842529297,
			"seed": 647561131,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "X6HLW7Q3"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 465,
			"versionNonce": 1784868235,
			"isDeleted": false,
			"id": "X6HLW7Q3",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 722.8639526367188,
			"y": -546.8787841796875,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 39.47998046875,
			"height": 25,
			"seed": 1313985099,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "EOF",
			"rawText": "EOF",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "LHF4FTbCezqiVqzeFtShi",
			"originalText": "EOF",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"id": "qJSqRGXl4rK5V5-3gS0jE",
			"type": "arrow",
			"x": -47.8629150390625,
			"y": -426.87705993652344,
			"width": 59.171142578125,
			"height": 151.47952270507812,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 135163013,
			"version": 762,
			"versionNonce": 1066895083,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "V3BSxfA5"
				}
			],
			"updated": 1711911910985,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-59.171142578125,
					59.008544921875
				],
				[
					-16.9216261883833,
					151.47952270507812
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "oxQt6QpFBiGVaasvxeZLh",
				"gap": 13.30014419555664,
				"focus": -0.3681223845002909
			},
			"endBinding": {
				"elementId": "xWTeW9iq",
				"focus": -0.4947431338967188,
				"gap": 13.868499755859375
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "V3BSxfA5",
			"type": "text",
			"x": -196.5639877319336,
			"y": -392.86851501464844,
			"width": 179.0598602294922,
			"height": 50,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 902069221,
			"version": 46,
			"versionNonce": 1113785387,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "This is actually a\nToken",
			"rawText": "This is actually a Token",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 42,
			"containerId": "qJSqRGXl4rK5V5-3gS0jE",
			"originalText": "This is actually a Token",
			"lineHeight": 1.25
		},
		{
			"id": "ZVhyKOlaxtMQHlAZexnBl",
			"type": "arrow",
			"x": 116.90313720703125,
			"y": -431.0492095947266,
			"width": 76.5570068359375,
			"height": 150.30276489257818,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1413835877,
			"version": 322,
			"versionNonce": 746418571,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "CCIb3M8q"
				}
			],
			"updated": 1711911910985,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					29.979248046875,
					65.85510253906256
				],
				[
					76.5570068359375,
					150.30276489257818
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "GsYo2yQtCeGlD2XE8oAo2",
				"gap": 7.826282501220703,
				"focus": 0.3949377677770946
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "CCIb3M8q",
			"type": "text",
			"x": 103.01243591308594,
			"y": -377.69410705566406,
			"width": 87.73989868164062,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 957902155,
			"version": 24,
			"versionNonce": 1533494987,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "initializer",
			"rawText": "initializer",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 17,
			"containerId": "ZVhyKOlaxtMQHlAZexnBl",
			"originalText": "initializer",
			"lineHeight": 1.25
		},
		{
			"id": "xWTeW9iq",
			"type": "text",
			"x": -189.39581298828125,
			"y": -261.52903747558594,
			"width": 550.78125,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1978145227,
			"version": 124,
			"versionNonce": 1722654565,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "qJSqRGXl4rK5V5-3gS0jE",
					"type": "arrow"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "Stmt.Var(name='a', initializer=Expr.Literal(1))",
			"rawText": "Stmt.Var(name='a', initializer=Expr.Literal(1))",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 19,
			"containerId": null,
			"originalText": "Stmt.Var(name='a', initializer=Expr.Literal(1))",
			"lineHeight": 1.2
		},
		{
			"id": "vdWFOvArhozEiNVMfoiTn",
			"type": "arrow",
			"x": 613.7659301757812,
			"y": -493.62110900878906,
			"width": 0.898681640625,
			"height": 124.14474487304688,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1141868523,
			"version": 511,
			"versionNonce": 1940966091,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711911910985,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.898681640625,
					124.14474487304688
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "JaoW-7WlZvLvymV8m9xtZ",
				"gap": 12.112659454345703,
				"focus": -0.21465561871196598
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "uPTfhOr-5RrlIX0mjqP1J",
			"type": "arrow",
			"x": 531.7445068359375,
			"y": -496.80470275878906,
			"width": 96.66876220703125,
			"height": 385.7036437988281,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2012078597,
			"version": 721,
			"versionNonce": 1720518699,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "c0rQHNDW"
				}
			],
			"updated": 1711911910985,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-11.94720458984375,
					155.6387939453125
				],
				[
					84.7215576171875,
					385.7036437988281
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "s5gSfoAZ1bap6H6_myyp9",
				"gap": 8.908039093017578,
				"focus": 0.26053132824753644
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "c0rQHNDW",
			"type": "text",
			"x": 383.8478088378906,
			"y": -287.719482421875,
			"width": 199.21875,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 150770565,
			"version": 29,
			"versionNonce": 865488907,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "print_statement()",
			"rawText": "print_statement()",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 19,
			"containerId": "uPTfhOr-5RrlIX0mjqP1J",
			"originalText": "print_statement()",
			"lineHeight": 1.2
		},
		{
			"id": "nurjGwJH1hXnOEvIxr0Ju",
			"type": "arrow",
			"x": 613.4321899414062,
			"y": -315.4871063232422,
			"width": 71.007080078125,
			"height": 108.73150634765625,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1425444901,
			"version": 365,
			"versionNonce": 868141605,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "CbqKtkX6"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					71.007080078125,
					108.73150634765625
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": {
				"elementId": "M5K8GHTf",
				"focus": -0.7687770191344201,
				"gap": 10.457763671875
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "CbqKtkX6",
			"type": "text",
			"x": 570.1812133789062,
			"y": -207.31333923339844,
			"width": 58.59375,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1742963243,
			"version": 17,
			"versionNonce": 67507883,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "value",
			"rawText": "value",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 19,
			"containerId": "nurjGwJH1hXnOEvIxr0Ju",
			"originalText": "value",
			"lineHeight": 1.2
		},
		{
			"id": "M5K8GHTf",
			"type": "text",
			"x": 680.7431030273438,
			"y": -196.29783630371094,
			"width": 210.9375,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1092129547,
			"version": 168,
			"versionNonce": 940326277,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "CVAk33bxqqCOLOkvpbSse",
					"type": "arrow"
				},
				{
					"id": "nurjGwJH1hXnOEvIxr0Ju",
					"type": "arrow"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "Expr.Variable('a')",
			"rawText": "Expr.Variable('a')",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 19,
			"containerId": null,
			"originalText": "Expr.Variable('a')",
			"lineHeight": 1.2
		},
		{
			"id": "CVAk33bxqqCOLOkvpbSse",
			"type": "arrow",
			"x": 765.5193481445312,
			"y": -169.00132751464844,
			"width": 16.461669921875,
			"height": 70.07427978515625,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2107840843,
			"version": 371,
			"versionNonce": 1275332939,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-16.461669921875,
					70.07427978515625
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "M5K8GHTf",
				"focus": 0.15790416601379506,
				"gap": 3.2965087890625
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "Yzef3fSr",
			"type": "text",
			"x": 476.15289306640625,
			"y": -78.32316589355469,
			"width": 480.46875,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 695715589,
			"version": 231,
			"versionNonce": 1830044901,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "Stmt.Print(expression=Expr.Variable('a'))",
			"rawText": "Stmt.Print(expression=Expr.Variable('a'))",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 19,
			"containerId": null,
			"originalText": "Stmt.Print(expression=Expr.Variable('a'))",
			"lineHeight": 1.2
		},
		{
			"id": "xiODM_xQcYKTm4nF_EkLp",
			"type": "arrow",
			"x": 64.96874873591923,
			"y": -218.94053916700307,
			"width": 18.915546683512872,
			"height": 147.4138421468487,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1844620965,
			"version": 417,
			"versionNonce": 1467720005,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711912809888,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-18.915546683512872,
					147.4138421468487
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": {
				"elementId": "je3asnEQWaN7mZODl4HqK",
				"focus": 0.10275971149512922,
				"gap": 13.155215466069762
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "f4FG4xqF88fO1gaNDom-e",
			"type": "arrow",
			"x": 457.92090587705275,
			"y": -61.616999049507626,
			"width": 127.10209754052471,
			"height": 15.26492643977128,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1188294155,
			"version": 507,
			"versionNonce": 822647403,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711912807029,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-127.10209754052471,
					15.26492643977128
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": {
				"elementId": "je3asnEQWaN7mZODl4HqK",
				"focus": 0.39491783463835906,
				"gap": 5.269432458341896
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "text",
			"version": 233,
			"versionNonce": 1220833931,
			"isDeleted": false,
			"id": "zCNRNi5A",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -258.6680986460751,
			"y": -45.03361155345931,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 550.78125,
			"height": 24,
			"seed": 326472293,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Stmt.Var(name='a', initializer=Expr.Literal(1))",
			"rawText": "Stmt.Var(name='a', initializer=Expr.Literal(1))",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Stmt.Var(name='a', initializer=Expr.Literal(1))",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "text",
			"version": 450,
			"versionNonce": 1775898533,
			"isDeleted": false,
			"id": "6tXUj8uN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -248.36852178996503,
			"y": 14.47279248059408,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 480.46875,
			"height": 24,
			"seed": 342106437,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Stmt.Print(expression=Expr.Variable('a'))",
			"rawText": "Stmt.Print(expression=Expr.Variable('a'))",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Stmt.Print(expression=Expr.Variable('a'))",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"id": "0h47pdO7",
			"type": "text",
			"x": -419.81165999223026,
			"y": -106.23261811757695,
			"width": 416.69586181640625,
			"height": 35,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1437556005,
			"version": 253,
			"versionNonce": 1145825579,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "Creates a list of statements",
			"rawText": "Creates a list of statements",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "Creates a list of statements",
			"lineHeight": 1.25
		},
		{
			"id": "je3asnEQWaN7mZODl4HqK",
			"type": "rectangle",
			"x": -309.30315556981685,
			"y": -58.371481554084596,
			"width": 634.852531448003,
			"height": 51.21405057632023,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 135446635,
			"version": 402,
			"versionNonce": 1705169669,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "xiODM_xQcYKTm4nF_EkLp",
					"type": "arrow"
				},
				{
					"id": "f4FG4xqF88fO1gaNDom-e",
					"type": "arrow"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 525,
			"versionNonce": 1491831755,
			"isDeleted": false,
			"id": "y6NYlBSAoAEIkzyGdClRJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -310.3172165879837,
			"y": 3.6068276284933063,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 634.852531448003,
			"height": 51.21405057632023,
			"seed": 842856709,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "W9HANwUOBIGZXar1zadpc",
					"type": "arrow"
				},
				{
					"id": "moKtnMOrZ_K-IKGB2LaDe",
					"type": "arrow"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"id": "cVwrrkyJ",
			"type": "text",
			"x": -337.4955771198311,
			"y": 10.425793206285334,
			"width": 7.587997436523437,
			"height": 35,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1953174987,
			"version": 100,
			"versionNonce": 641477221,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "1",
			"rawText": "1",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25
		},
		{
			"id": "yt1JxPjUkM4SNqSNFJl2W",
			"type": "freedraw",
			"x": -107.34655820193257,
			"y": -509.883785603041,
			"width": 836.855838505044,
			"height": 155.68905664034548,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 998401061,
			"version": 151,
			"versionNonce": 180214379,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					-1.2670919424805334
				],
				[
					1.9911019230937654,
					-2.7638691250045895
				],
				[
					5.820182275918569,
					-5.3189064040033145
				],
				[
					13.770687705601858,
					-10.8884507439642
				],
				[
					18.45604813836485,
					-13.568757340003572
				],
				[
					21.33133396865651,
					-14.724432577196922
				],
				[
					26.68499602938914,
					-17.40478882417449
				],
				[
					32.99245261265514,
					-20.21041438819259
				],
				[
					38.34621397526439,
					-22.222419356262208
				],
				[
					42.80874099745324,
					-23.503413561434513
				],
				[
					48.16250236006226,
					-24.847067250596183
				],
				[
					53.516164420794894,
					-26.859022567727607
				],
				[
					57.978790744860135,
					-28.1400167728998
				],
				[
					63.33245280559299,
					-28.1400167728998
				],
				[
					68.68621416820201,
					-30.152021740969417
				],
				[
					74.99367075146802,
					-30.85517832754499
				],
				[
					82.31758134125675,
					-32.3241509846855
				],
				[
					89.6414919310455,
					-33.79307399088793
				],
				[
					96.96540252083423,
					-35.262046648028445
				],
				[
					105.3684266011353,
					-36.793678789158434
				],
				[
					113.77145068143614,
					-38.32531093028854
				],
				[
					123.31624773623867,
					-40.71322315135649
				],
				[
					130.6401583260274,
					-42.18219580849711
				],
				[
					136.9476149092934,
					-42.88535239507257
				],
				[
					144.27162480095853,
					-45.08528616417232
				],
				[
					151.59543608887088,
					-46.55425882131294
				],
				[
					158.91934667865962,
					-48.023231478453454
				],
				[
					166.24325726844836,
					-49.492204135593965
				],
				[
					173.56736646198988,
					-51.69213790469371
				],
				[
					180.89127705177862,
					-53.161110561834334
				],
				[
					203.78194838507238,
					-59.113562937077745
				],
				[
					219.63410272126453,
					-64.4115662961051
				],
				[
					229.17899907794344,
					-67.60009989540583
				],
				[
					238.72369683086959,
					-69.98801211647378
				],
				[
					247.1268202130468,
					-73.04432526738788
				],
				[
					254.45073080283555,
					-75.24425903648762
				],
				[
					261.7746413926243,
					-78.17525321942287
				],
				[
					267.12840275523354,
					-80.1872085365543
				],
				[
					273.43585933849954,
					-82.99288375151059
				],
				[
					278.7894220973558,
					-85.00483906864201
				],
				[
					289.49694482257405,
					-90.36555156259703
				],
				[
					294.85070618518307,
					-93.04585815863629
				],
				[
					300.4549068799972,
					-96.55464030923008
				],
				[
					306.30994411452184,
					-100.95460714930584
				],
				[
					310.99520524540844,
					-104.30326502425305
				],
				[
					313.29265345710337,
					-106.60766436729398
				],
				[
					317.1217338099284,
					-109.1626519953544
				],
				[
					320.31031706016734,
					-112.3581863769391
				],
				[
					322.60776527186226,
					-114.66258571998003
				],
				[
					324.9052134835572,
					-116.96698506302096
				],
				[
					326.5341614635297,
					-118.60303312715394
				],
				[
					327.5575666013983,
					-120.1485675309757
				],
				[
					328.58097173926694,
					-121.69410193479746
				],
				[
					329.60437687713556,
					-123.23963633861933
				],
				[
					330.6277820150042,
					-124.7851707424411
				],
				[
					331.13600901826567,
					-126.33070514626286
				],
				[
					331.6164314961434,
					-127.2984515824262
				],
				[
					332.12465849940486,
					-128.84398598624796
				],
				[
					332.60508097728257,
					-129.811682771473
				],
				[
					333.0853048514077,
					-130.77937955669813
				],
				[
					333.530971672556,
					-131.2318982073159
				],
				[
					333.9764398899515,
					-131.6844168579338
				],
				[
					334.408204448408,
					-131.6844168579338
				],
				[
					334.82586814041997,
					-131.6844168579338
				],
				[
					334.82586814041997,
					-131.2388493386618
				],
				[
					335.3062906182977,
					-130.27810368478265
				],
				[
					336.26693697030055,
					-128.35666202796244
				],
				[
					337.2277819260562,
					-127.39591637408319
				],
				[
					341.0638134102271,
					-124.70860899575985
				],
				[
					343.9389999386424,
					-122.98204727131565
				],
				[
					347.5800025376227,
					-121.77066368147871
				],
				[
					352.04262886168794,
					-120.4966702585906
				],
				[
					356.5052551857532,
					-119.86312428735027
				],
				[
					362.8127117690192,
					-118.46376224554513
				],
				[
					370.1366223588079,
					-117.7327514826477
				],
				[
					378.53974574098515,
					-116.97393619436684
				],
				[
					388.0844434939113,
					-116.18026594748005
				],
				[
					402.8297791160842,
					-116.18026594748005
				],
				[
					409.1372356993502,
					-116.18026594748005
				],
				[
					426.8622234238794,
					-116.18026594748005
				],
				[
					440.20819700424704,
					-116.18026594748005
				],
				[
					452.22451846002105,
					-117.0435468097022
				],
				[
					466.96985408219393,
					-119.81436706605268
				],
				[
					480.31582766256133,
					-121.59663714314036
				],
				[
					486.62328424582734,
					-123.0029503162915
				],
				[
					507.58551314001693,
					-127.2009867907691
				],
				[
					514.9094237298057,
					-128.6699097969714
				],
				[
					526.9257451855797,
					-132.10913098316803
				],
				[
					537.6749746988733,
					-133.76603244133867
				],
				[
					549.6910975508945,
					-137.2052039765971
				],
				[
					560.4403270641881,
					-138.86215508570592
				],
				[
					571.1895565774817,
					-141.3475320984311
				],
				[
					581.9385874870225,
					-143.00448320753992
				],
				[
					599.6637738153045,
					-145.96328191585872
				],
				[
					605.9712303985705,
					-147.36959508900986
				],
				[
					616.7202613081113,
					-148.19807064356428
				],
				[
					628.7365827638853,
					-149.9176812366626
				],
				[
					639.4858122771789,
					-150.7461071402788
				],
				[
					650.2350417904725,
					-151.57458269483334
				],
				[
					660.9840727000133,
					-153.23153380394217
				],
				[
					671.7333022133068,
					-153.23153380394217
				],
				[
					682.4825317266002,
					-154.0600093584966
				],
				[
					693.2317612398938,
					-154.888484913051
				],
				[
					702.7764589928199,
					-155.68905664034548
				],
				[
					712.3211567457461,
					-155.68905664034548
				],
				[
					721.866053102425,
					-155.68905664034548
				],
				[
					730.2689778808497,
					-155.68905664034548
				],
				[
					738.6721012630269,
					-155.68905664034548
				],
				[
					745.9960118528156,
					-155.68905664034548
				],
				[
					753.3199224426044,
					-155.68905664034548
				],
				[
					759.6273790258704,
					-155.68905664034548
				],
				[
					772.2422921924024,
					-155.68905664034548
				],
				[
					778.5497487756684,
					-154.28974424947842
				],
				[
					789.2572715008866,
					-150.9480375058771
				],
				[
					793.7198978249519,
					-149.0334973294647
				],
				[
					801.0577106774324,
					-146.610779800729
				],
				[
					804.6987132764127,
					-144.7937044159736
				],
				[
					807.573899804828,
					-143.0671426915294
				],
				[
					810.449284936996,
					-141.91841858568193
				],
				[
					812.7467331486912,
					-140.19185686123774
				],
				[
					814.9188623924072,
					-139.10584189031783
				],
				[
					817.2163106041023,
					-137.37928016587364
				],
				[
					818.7548938765781,
					-136.35587502800502
				],
				[
					821.0523420882732,
					-134.05842681630998
				],
				[
					822.0755486223891,
					-132.5198435438341
				],
				[
					823.7046952061144,
					-130.8907962619852
				],
				[
					824.7908591298487,
					-128.71866701826912
				],
				[
					827.2136263095226,
					-125.69025769461496
				],
				[
					827.7566089695135,
					-123.51812845089876
				],
				[
					828.8425742894951,
					-121.34599920718267
				],
				[
					829.9912983953427,
					-118.47071337689101
				],
				[
					831.1400225011901,
					-115.59547719753743
				],
				[
					832.2887466070376,
					-112.72019136724577
				],
				[
					832.8597323961649,
					-109.84495518789231
				],
				[
					833.4027150561556,
					-107.67282594417611
				],
				[
					834.4261201940242,
					-106.13424267170024
				],
				[
					834.9691028540151,
					-103.96211342798415
				],
				[
					835.4495253318928,
					-103.00136777410489
				],
				[
					835.929749206018,
					-102.04062212022575
				],
				[
					836.4101716838957,
					-101.07987646634649
				],
				[
					836.4101716838957,
					-100.6343585980128
				],
				[
					836.4101716838957,
					-100.1887910787409
				],
				[
					836.855838505044,
					-99.29765604019701
				],
				[
					836.855838505044,
					-99.29765604019701
				]
			],
			"pressures": [],
			"simulatePressure": true,
			"lastCommittedPoint": [
				836.855838505044,
				-99.29765604019701
			]
		},
		{
			"id": "P0Y0Su1f",
			"type": "text",
			"x": 128.1692899495804,
			"y": -699.0803537926768,
			"width": 199.6118927001953,
			"height": 35,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 253043941,
			"version": 65,
			"versionNonce": 1819514309,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "List of tokens",
			"rawText": "List of tokens",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "List of tokens",
			"lineHeight": 1.25
		},
		{
			"id": "W9KKLBxI",
			"type": "text",
			"x": -526.3093938888778,
			"y": -587.6239655203481,
			"width": 133.5039520263672,
			"height": 35,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 296177995,
			"version": 57,
			"versionNonce": 1988973835,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "Raw Code",
			"rawText": "Raw Code",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "Raw Code",
			"lineHeight": 1.25
		},
		{
			"id": "3HKvrpbj",
			"type": "text",
			"x": -358.95025415693465,
			"y": -597.6565620752662,
			"width": 7.587997436523437,
			"height": 35,
			"angle": 0,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 426669099,
			"version": 8,
			"versionNonce": 57054501,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "1",
			"rawText": "1",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25
		},
		{
			"id": "BuU0BhCHB673c-QhOB6qR",
			"type": "ellipse",
			"x": -380.82487392889414,
			"y": -605.704874881567,
			"width": 51.649118000000044,
			"height": 45.79564340167451,
			"angle": 0,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1874169989,
			"version": 138,
			"versionNonce": 1003781035,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 15,
			"versionNonce": 1988274309,
			"isDeleted": false,
			"id": "IurBBTVM",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 343.0158520479657,
			"y": -536.8320941831614,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 19.935989379882812,
			"height": 35,
			"seed": 283775973,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "ellipse",
			"version": 205,
			"versionNonce": 649973323,
			"isDeleted": false,
			"id": "lG6RT1n_epok0v8uBxIHy",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 325.8436988388322,
			"y": -544.5483845999116,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 51.649118000000044,
			"height": 45.79564340167451,
			"seed": 1822969669,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 22,
			"versionNonce": 126177253,
			"isDeleted": false,
			"id": "FhMmAL19",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 229.28526306567585,
			"y": -332.83316255441093,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 34.32798767089844,
			"height": 35,
			"seed": 1179043979,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "3.1",
			"rawText": "3.1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "3.1",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "ellipse",
			"version": 415,
			"versionNonce": 438553835,
			"isDeleted": false,
			"id": "9TzaNqdO-cz1Tdtthk-oW",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 212.445029293414,
			"y": -342.8699806160831,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 62.56611712110305,
			"height": 55.475402091192244,
			"seed": 1259568939,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 27,
			"versionNonce": 1685850949,
			"isDeleted": false,
			"id": "ns5WVykT",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 710.1299195937087,
			"y": -337.27026528102436,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 46.67597961425781,
			"height": 35,
			"seed": 944791365,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "3.2",
			"rawText": "3.2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "3.2",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "ellipse",
			"version": 418,
			"versionNonce": 965801867,
			"isDeleted": false,
			"id": "n852aHKne5cUDYpO4FjAv",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 693.2896858214468,
			"y": -347.30708334269656,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 62.56611712110305,
			"height": 55.475402091192244,
			"seed": 468594341,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 61,
			"versionNonce": 499407525,
			"isDeleted": false,
			"id": "7dEHwwU2",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -462.6903719240117,
			"y": -39.63129077084312,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 17.919998168945312,
			"height": 35,
			"seed": 1357497509,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "4",
			"rawText": "4",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "4",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "ellipse",
			"version": 418,
			"versionNonce": 1396690475,
			"isDeleted": false,
			"id": "Nr0Od0vX9dgmTu1Liup97",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -483.00603075526726,
			"y": -50.57038611066156,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 62.56611712110305,
			"height": 55.475402091192244,
			"seed": 452192261,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"id": "uIXBzRa5MmTwI1QAwNQZB",
			"type": "rectangle",
			"x": 830.9544201999288,
			"y": -592.0921166696158,
			"width": 331.8387473208706,
			"height": 170.63096282019245,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1995513387,
			"version": 363,
			"versionNonce": 1544273413,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "KYiI8mtx"
				}
			],
			"updated": 1711908201895,
			"link": null,
			"locked": false
		},
		{
			"id": "KYiI8mtx",
			"type": "text",
			"x": 835.9544201999288,
			"y": -587.0921166696158,
			"width": 318.1197509765625,
			"height": 125,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1719864395,
			"version": 281,
			"versionNonce": 169529547,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "\n Each statement (separated by\na semicolon) is constructed\nseparately, and then they are\nall added to a statements list.",
			"rawText": "\n Each statement (separated by a semicolon) is constructed separately, and then they are all added to a statements list.",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 117,
			"containerId": "uIXBzRa5MmTwI1QAwNQZB",
			"originalText": "\n Each statement (separated by a semicolon) is constructed separately, and then they are all added to a statements list.",
			"lineHeight": 1.25
		},
		{
			"id": "i1RUqoYi",
			"type": "text",
			"x": -337.8377811732038,
			"y": -46.38420327332261,
			"width": 13.759994506835938,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1382496331,
			"version": 34,
			"versionNonce": 1448064357,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201895,
			"link": null,
			"locked": false,
			"text": "0",
			"rawText": "0",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 17,
			"containerId": null,
			"originalText": "0",
			"lineHeight": 1.25
		},
		{
			"id": "W9HANwUOBIGZXar1zadpc",
			"type": "arrow",
			"x": -254.05390101958756,
			"y": 61.60489725119896,
			"width": 258.17969202739755,
			"height": 201.38398050374332,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1949838661,
			"version": 41,
			"versionNonce": 1069317995,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908201896,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-258.17969202739755,
					201.38398050374332
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "y6NYlBSAoAEIkzyGdClRJ",
				"focus": 0.6270764335144406,
				"gap": 6.784019046385424
			},
			"endBinding": {
				"elementId": "bkbaLU4pyLcrELm6eBV_P",
				"focus": -0.14545287636834367,
				"gap": 3.416377997088773
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "moKtnMOrZ_K-IKGB2LaDe",
			"type": "arrow",
			"x": 212.58320508178258,
			"y": 63.632091976103595,
			"width": 261.5191788481534,
			"height": 195.48428841613804,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 978152459,
			"version": 173,
			"versionNonce": 2007779147,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908205208,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					261.5191788481534,
					195.48428841613804
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "y6NYlBSAoAEIkzyGdClRJ",
				"focus": -0.45333214741005323,
				"gap": 8.811213771290056
			},
			"endBinding": {
				"elementId": "UHyYHuEtkr5lHqKW4UHnh",
				"focus": 0.06550958637367874,
				"gap": 9.578157799882149
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "text",
			"version": 304,
			"versionNonce": 1047484939,
			"isDeleted": false,
			"id": "YORrzFXA",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -765.2879664436203,
			"y": 279.74312575265634,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 550.78125,
			"height": 24,
			"seed": 1634281317,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201896,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Stmt.Var(name='a', initializer=Expr.Literal(1))",
			"rawText": "Stmt.Var(name='a', initializer=Expr.Literal(1))",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Stmt.Var(name='a', initializer=Expr.Literal(1))",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "rectangle",
			"version": 475,
			"versionNonce": 543945099,
			"isDeleted": false,
			"id": "bkbaLU4pyLcrELm6eBV_P",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -815.9230233673621,
			"y": 266.40525575203105,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 634.852531448003,
			"height": 51.21405057632023,
			"seed": 318304965,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "W9HANwUOBIGZXar1zadpc",
					"type": "arrow"
				},
				{
					"id": "xEW1QkPxphGLZR5coFbT4",
					"type": "arrow"
				}
			],
			"updated": 1711908224619,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 105,
			"versionNonce": 590209195,
			"isDeleted": false,
			"id": "8qnE36Ok",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -844.4576489707491,
			"y": 278.39253403279304,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 13.759994506835938,
			"height": 25,
			"seed": 1261982245,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908201896,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "0",
			"rawText": "0",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "0",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 742,
			"versionNonce": 1326530917,
			"isDeleted": false,
			"id": "w1xN5dOw",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 248.0887734538689,
			"y": 279.3309137114476,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 480.46875,
			"height": 24,
			"seed": 1425151851,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908204962,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Stmt.Print(expression=Expr.Variable('a'))",
			"rawText": "Stmt.Print(expression=Expr.Variable('a'))",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Stmt.Print(expression=Expr.Variable('a'))",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "rectangle",
			"version": 696,
			"versionNonce": 1343515941,
			"isDeleted": false,
			"id": "UHyYHuEtkr5lHqKW4UHnh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 180.70827677737321,
			"y": 268.6945381921238,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 634.852531448003,
			"height": 51.21405057632023,
			"seed": 1228009995,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "moKtnMOrZ_K-IKGB2LaDe",
					"type": "arrow"
				},
				{
					"id": "btWQMQ0b4A5Oo6LcnAPP9",
					"type": "arrow"
				}
			],
			"updated": 1711908647392,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 337,
			"versionNonce": 757197861,
			"isDeleted": false,
			"id": "rkPpM2FB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 153.52991624552578,
			"y": 275.5135037699158,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 7.587997436523437,
			"height": 35,
			"seed": 1776122027,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908204962,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"id": "xEW1QkPxphGLZR5coFbT4",
			"type": "arrow",
			"x": -689.6732285949445,
			"y": 322.74628860462957,
			"width": 18.167899481240624,
			"height": 72.49559952802753,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 798765477,
			"version": 484,
			"versionNonce": 780522053,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908445884,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-18.167899481240624,
					72.49559952802753
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "bkbaLU4pyLcrELm6eBV_P",
				"focus": 0.5666991582945203,
				"gap": 5.126982276278284
			},
			"endBinding": {
				"elementId": "vfwzbiAw",
				"focus": -0.3544273334796097,
				"gap": 11.224685821323646
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "vfwzbiAw",
			"type": "text",
			"x": -850.7124360342714,
			"y": 406.46657395398074,
			"width": 421.875,
			"height": 48,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1015536485,
			"version": 251,
			"versionNonce": 1401040773,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "xEW1QkPxphGLZR5coFbT4",
					"type": "arrow"
				},
				{
					"id": "EDWlvPUmgwT06OFWKDYXK",
					"type": "arrow"
				}
			],
			"updated": 1711908445884,
			"link": null,
			"locked": false,
			"text": "visit_var_stmt(stmt):\n  value = evaluate(stmt.initializer)",
			"rawText": "visit_var_stmt(stmt):\n  value = evaluate(stmt.initializer)",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 43,
			"containerId": null,
			"originalText": "visit_var_stmt(stmt):\n  value = evaluate(stmt.initializer)",
			"lineHeight": 1.2
		},
		{
			"id": "EDWlvPUmgwT06OFWKDYXK",
			"type": "arrow",
			"x": -419.8665493181935,
			"y": 445.0903912330279,
			"width": 102.65690287885423,
			"height": 113.90467364093257,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2128331083,
			"version": 535,
			"versionNonce": 99551941,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908481144,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					70.38894347213477,
					31.386778962610776
				],
				[
					102.65690287885423,
					113.90467364093257
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "vfwzbiAw",
				"focus": -0.7067235449610991,
				"gap": 8.970886716077871
			},
			"endBinding": {
				"elementId": "LFLzAai0",
				"focus": -0.46472298164212045,
				"gap": 8.37693920794834
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "dpjhQj0kKXOV80zotnkMm",
			"type": "line",
			"x": -723.4569176639989,
			"y": 457.3577775718429,
			"width": 295.08518399096755,
			"height": 0.3205890451607729,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1687190181,
			"version": 203,
			"versionNonce": 543520549,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908449141,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					295.08518399096755,
					-0.3205890451607729
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": null
		},
		{
			"id": "LFLzAai0",
			"type": "text",
			"x": -381.733584411681,
			"y": 567.3720040819088,
			"width": 304.6875,
			"height": 48,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 191730853,
			"version": 429,
			"versionNonce": 1037101675,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "EDWlvPUmgwT06OFWKDYXK",
					"type": "arrow"
				}
			],
			"updated": 1711908476167,
			"link": null,
			"locked": false,
			"text": "evaluate(expr):\n  return expr.accept(self)",
			"rawText": "evaluate(expr):\n  return expr.accept(self)",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 43,
			"containerId": null,
			"originalText": "evaluate(expr):\n  return expr.accept(self)",
			"lineHeight": 1.2
		},
		{
			"id": "aLJRdQNFxySTP31Gov_ir",
			"type": "arrow",
			"x": -238.63269690845095,
			"y": 634.4286151699145,
			"width": 123.5660238445763,
			"height": 119.49015003995066,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1365174853,
			"version": 377,
			"versionNonce": 1842211691,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908488732,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-43.30498294152312,
					59.55346457643725
				],
				[
					-123.5660238445763,
					119.49015003995066
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "N-ctO3YV9jbrEfJU_7DgC",
			"type": "line",
			"x": -270.18285970214447,
			"y": 622.8497556958074,
			"width": 193.58728799631592,
			"height": 0.0941378981079879,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1349186373,
			"version": 136,
			"versionNonce": 1582899813,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908482441,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					193.58728799631592,
					0.0941378981079879
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": null
		},
		{
			"id": "205c3IQK",
			"type": "text",
			"x": -671.170411558054,
			"y": 744.2333549866474,
			"width": 292.96875,
			"height": 48,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 632197323,
			"version": 145,
			"versionNonce": 463812523,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1711908492843,
			"link": null,
			"locked": false,
			"text": "visit_literal_expr(expr):\n  return expr.value",
			"rawText": "visit_literal_expr(expr):\n  return expr.value",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 43,
			"containerId": null,
			"originalText": "visit_literal_expr(expr):\n  return expr.value",
			"lineHeight": 1.2
		},
		{
			"id": "mf3_IrGZYhYS8jrJsP1Xz",
			"type": "arrow",
			"x": -668.7737822973672,
			"y": 783.0869723436886,
			"width": 228.94896409002735,
			"height": 334.93300945560316,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 176480139,
			"version": 980,
			"versionNonce": 1561510405,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "wBdLs0y5"
				}
			],
			"updated": 1711908497791,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-228.94896409002735,
					-155.82338765674012
				],
				[
					-164.6873892036615,
					-334.93300945560316
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "wBdLs0y5",
			"type": "text",
			"x": -903.5821213873946,
			"y": 615.2635846869484,
			"width": 5.4199981689453125,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1217313637,
			"version": 3,
			"versionNonce": 1204499339,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908496026,
			"link": null,
			"locked": false,
			"text": "1",
			"rawText": "1",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 17,
			"containerId": "mf3_IrGZYhYS8jrJsP1Xz",
			"originalText": "1",
			"lineHeight": 1.2
		},
		{
			"id": "pjaeB71w",
			"type": "text",
			"x": -830.789014088981,
			"y": 465.770093687192,
			"width": 421.875,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1328950181,
			"version": 296,
			"versionNonce": 1854814347,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "YOutfBR8V5yr4s5ZhyAYn",
					"type": "arrow"
				}
			],
			"updated": 1711911884212,
			"link": null,
			"locked": false,
			"text": "environment.define(stmt.name, value)",
			"rawText": "environment.define(stmt.name, value)",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 19,
			"containerId": null,
			"originalText": "environment.define(stmt.name, value)",
			"lineHeight": 1.2
		},
		{
			"id": "cNFLqf7xAdybt3R-BYXsX",
			"type": "rectangle",
			"x": -785.262736206234,
			"y": 535.7625911596983,
			"width": 358.4432148202492,
			"height": 141.3385699754541,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 668350821,
			"version": 119,
			"versionNonce": 477706437,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "bHEZXVfT"
				}
			],
			"updated": 1711908592568,
			"link": null,
			"locked": false
		},
		{
			"id": "bHEZXVfT",
			"type": "text",
			"x": -770.5110079465001,
			"y": 581.4318761474253,
			"width": 328.93975830078125,
			"height": 50,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1663354891,
			"version": 112,
			"versionNonce": 146790437,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908592568,
			"link": null,
			"locked": false,
			"text": "We grab that literal and stick it\nin the environments dict",
			"rawText": "We grab that literal and stick it in the environments dict",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 42,
			"containerId": "cNFLqf7xAdybt3R-BYXsX",
			"originalText": "We grab that literal and stick it in the environments dict",
			"lineHeight": 1.25
		},
		{
			"type": "text",
			"version": 64,
			"versionNonce": 174691205,
			"isDeleted": false,
			"id": "0OQRNt08",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -278.51374766027595,
			"y": 355.56523658855014,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 17.304000854492188,
			"height": 35,
			"seed": 635032843,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711908627893,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "5",
			"rawText": "5",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "5",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "ellipse",
			"version": 421,
			"versionNonce": 1199872011,
			"isDeleted": false,
			"id": "qrEzMGY1Flhlc3Ec3BC3g",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -298.50603418110006,
			"y": 344.6261412487317,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 62.56611712110305,
			"height": 55.475402091192244,
			"seed": 1301347243,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1711911902010,
			"link": null,
			"locked": false
		},
		{
			"id": "btWQMQ0b4A5Oo6LcnAPP9",
			"type": "arrow",
			"x": 343.94757432234053,
			"y": 324.1972484777506,
			"width": 5.328746048665323,
			"height": 69.69593777753187,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 307559563,
			"version": 202,
			"versionNonce": 690362571,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908690006,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					5.328746048665323,
					69.69593777753187
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "UHyYHuEtkr5lHqKW4UHnh",
				"focus": 0.4901991388004518,
				"gap": 4.2886597093065575
			},
			"endBinding": {
				"elementId": "YDylA5Xw",
				"focus": -0.6240052467869258,
				"gap": 11.085547868786762
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "YDylA5Xw",
			"type": "text",
			"x": 277.48558932133955,
			"y": 404.97873412406915,
			"width": 410.15625,
			"height": 72,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 882714597,
			"version": 110,
			"versionNonce": 1292030795,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "btWQMQ0b4A5Oo6LcnAPP9",
					"type": "arrow"
				},
				{
					"id": "bdIBP0BFh9K8Andom_l9A",
					"type": "arrow"
				}
			],
			"updated": 1711911806135,
			"link": null,
			"locked": false,
			"text": "visit_print_stmt(stmt):\n  value = evaluate(stmt.expression)\n  print(stringify(value))",
			"rawText": "visit_print_stmt(stmt):\n  value = evaluate(stmt.expression)\n  print(stringify(value))",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 67,
			"containerId": null,
			"originalText": "visit_print_stmt(stmt):\n  value = evaluate(stmt.expression)\n  print(stringify(value))",
			"lineHeight": 1.2
		},
		{
			"id": "bdIBP0BFh9K8Andom_l9A",
			"type": "arrow",
			"x": 689.2421350131538,
			"y": 444.4787102332736,
			"width": 187.9129638327173,
			"height": 114.67070198091193,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1409615563,
			"version": 90,
			"versionNonce": 480134923,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908708889,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					119.51890415964999,
					48.25787145746813
				],
				[
					187.9129638327173,
					114.67070198091193
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "YDylA5Xw",
				"focus": -0.6729583638778645,
				"gap": 1.6002956918141251
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "vgnjq7ZK",
			"type": "text",
			"x": 866.0722907049737,
			"y": 581.0288284029451,
			"width": 304.6875,
			"height": 48,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 783958091,
			"version": 60,
			"versionNonce": 198794437,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908734569,
			"link": null,
			"locked": false,
			"text": "evaluate(expr):\n  return expr.accept(self)",
			"rawText": "evaluate(expr):\n  return expr.accept(self)",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 43,
			"containerId": null,
			"originalText": "evaluate(expr):\n  return expr.accept(self)",
			"lineHeight": 1.2
		},
		{
			"id": "aBSmp7RHMvdXSL40i2ur1",
			"type": "arrow",
			"x": 902.6307765459061,
			"y": 657.8382667024043,
			"width": 118.91373998150641,
			"height": 160.95439655128655,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1625687109,
			"version": 190,
			"versionNonce": 574101541,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711908852588,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-27.995314115620204,
					88.69031902738766
				],
				[
					-118.91373998150641,
					160.95439655128655
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "Xy9nPuXpgTQMH7ftCDMil",
				"focus": 0.5376906396054288,
				"gap": 2.9810625837694147
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "YVkElyZt",
			"type": "text",
			"x": 342.64717597057063,
			"y": 836.5925738794862,
			"width": 410.15625,
			"height": 48,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1900274597,
			"version": 72,
			"versionNonce": 1419552235,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "DahbuBu4mFBJLjcwZgORe",
					"type": "arrow"
				}
			],
			"updated": 1711911895883,
			"link": null,
			"locked": false,
			"text": "visit_var_expr(expr):\n  return environment.get(expr.name)",
			"rawText": "visit_var_expr(expr):\n  return environment.get(expr.name)",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 43,
			"containerId": null,
			"originalText": "visit_var_expr(expr):\n  return environment.get(expr.name)",
			"lineHeight": 1.2
		},
		{
			"id": "Colyfw0-bfngMDwfFwEjn",
			"type": "arrow",
			"x": 354.07562069777794,
			"y": 878.1769755554797,
			"width": 252.87800037373728,
			"height": 430.9096028485959,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1111252389,
			"version": 191,
			"versionNonce": 131930827,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "jnVXFMRs"
				}
			],
			"updated": 1711912816520,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-252.87800037373728,
					-224.56428250110469
				],
				[
					-66.68309960615943,
					-430.9096028485959
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "jnVXFMRs",
			"type": "text",
			"x": 48.86596033714028,
			"y": 641.612693054375,
			"width": 105.46875,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 2081995915,
			"version": 10,
			"versionNonce": 1412008805,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711911811768,
			"link": null,
			"locked": false,
			"text": "returns 1",
			"rawText": "returns 1",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 19,
			"containerId": "Colyfw0-bfngMDwfFwEjn",
			"originalText": "returns 1",
			"lineHeight": 1.2
		},
		{
			"id": "Sv4lRJKq",
			"type": "text",
			"x": -217.3373205253863,
			"y": 855.1402052771225,
			"width": 199.21875,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1288527179,
			"version": 18,
			"versionNonce": 1378427461,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711911820312,
			"link": null,
			"locked": false,
			"text": "Environment Store",
			"rawText": "Environment Store",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 19,
			"containerId": null,
			"originalText": "Environment Store",
			"lineHeight": 1.2
		},
		{
			"id": "i8KyJK-KQSmExnOq9BJTM",
			"type": "rectangle",
			"x": -279.0452875460657,
			"y": 890.901740229584,
			"width": 337.654947427326,
			"height": 53.071034532812746,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 32211269,
			"version": 134,
			"versionNonce": 639002411,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "gd04fUql"
				},
				{
					"id": "DahbuBu4mFBJLjcwZgORe",
					"type": "arrow"
				}
			],
			"updated": 1711911895883,
			"link": null,
			"locked": false
		},
		{
			"id": "gd04fUql",
			"type": "text",
			"x": -133.6553138324027,
			"y": 905.4372574959904,
			"width": 46.875,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1207969573,
			"version": 10,
			"versionNonce": 1912994565,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711911862381,
			"link": null,
			"locked": false,
			"text": "a: 1",
			"rawText": "a: 1",
			"fontSize": 20,
			"fontFamily": 3,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 19,
			"containerId": "i8KyJK-KQSmExnOq9BJTM",
			"originalText": "a: 1",
			"lineHeight": 1.2
		},
		{
			"id": "YOutfBR8V5yr4s5ZhyAYn",
			"type": "arrow",
			"x": -824.8893476617806,
			"y": 496.6657441443697,
			"width": 527.1202505162568,
			"height": 429.34579014104577,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1275037733,
			"version": 271,
			"versionNonce": 586653381,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711911886818,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					45.882918508718944,
					334.5172140963915
				],
				[
					527.1202505162568,
					429.34579014104577
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "pjaeB71w",
				"focus": 0.9766969245158592,
				"gap": 6.89565045717768
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "DahbuBu4mFBJLjcwZgORe",
			"type": "arrow",
			"x": 410.1989545717229,
			"y": 896.6240192255945,
			"width": 338.6121985495229,
			"height": 27.233707631524794,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1079538053,
			"version": 92,
			"versionNonce": 948124011,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711911910985,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-166.9567121580294,
					24.67735053200215
				],
				[
					-338.6121985495229,
					27.233707631524794
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "YVkElyZt",
				"focus": -0.28914636887002637,
				"gap": 12.031445346108285
			},
			"endBinding": {
				"elementId": "i8KyJK-KQSmExnOq9BJTM",
				"gap": 12.977096140939693,
				"focus": 0.31421845916259056
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "text",
			"version": 69,
			"versionNonce": 453971717,
			"isDeleted": false,
			"id": "yKCxY2v6",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 160.72446563642194,
			"y": 402.85749096310974,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 17.919998168945312,
			"height": 35,
			"seed": 2127788997,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711911912170,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "6",
			"rawText": "6",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "6",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "ellipse",
			"version": 424,
			"versionNonce": 1651931525,
			"isDeleted": false,
			"id": "Ya4s-Dv7ZlIG9N1FnSjgq",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 140.73217911559783,
			"y": 391.9183956232913,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 62.56611712110305,
			"height": 55.475402091192244,
			"seed": 1289337637,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1711911911133,
			"link": null,
			"locked": false
		},
		{
			"id": "PCsya8zL",
			"type": "text",
			"x": -137.1127225187288,
			"y": -810.5051579830057,
			"width": 639.84375,
			"height": 33.6,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 125118853,
			"version": 64,
			"versionNonce": 879971339,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1711912849866,
			"link": null,
			"locked": false,
			"text": "Flow for Variable Declaration and Print",
			"rawText": "Flow for Variable Declaration and Print",
			"fontSize": 28,
			"fontFamily": 3,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 27,
			"containerId": null,
			"originalText": "Flow for Variable Declaration and Print",
			"lineHeight": 1.2
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "#ffc9c9",
		"currentItemFillStyle": "hachure",
		"currentItemStrokeWidth": 1,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 3,
		"currentItemFontSize": 28,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 953.7981308378457,
		"scrollY": 1427.5916030552323,
		"zoom": {
			"value": 0.6801975897088637
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		}
	},
	"files": {}
}
```
%%