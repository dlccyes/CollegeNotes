# Vega-Lite

See <https://vega.github.io/vega-lite/docs/>

**example**

count vs. date for a datetime field "Application Date", filtering out null values

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "Job Application",
  "width": "container",
  "height": "container",
  "mark": {
    "type": "area",
    "interpolate": "monotone"
  },
  "transform": [
    {"filter": {"field": "Application Date", "range": [{"year": 2000, "month": "jan", "date": 1}, {"year": 2999, "month": "feb", "date": 20}]}}
  ],
  "encoding": {
    "x": {
      "field": "Application Date",
      "type": "temporal",
      "timeUnit": "yearmonth",
	  "axis": {"format": "%b. %Y"}
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    }
  }
}
```

## Draw 2 lines

Just put 2 jsons in `layer` array.

**2 lines example**

Just put your json into `layer: []`. You can create as many lines as you want.

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "Job Application",
  "width": "container",
  "height": "container",
  "layer":[
    {
      "mark": {
        "type": "area",
        "interpolate": "monotone",
        "color": "#3e78e681"
      },
      "transform": [
        {
          "filter": {
            "field": "Application Date",
            "range": [
              {
                "year": 2000,
                "month": "jan",
                "date": 1
              },
              {
                "year": 2999,
                "month": "feb",
                "date": 20
              }
            ]
          }
        }
      ],
      "encoding": {
        "x": {
          "field": "Application Date",
          "type": "temporal",
          "timeUnit": "yearmonth"
        },
        "y": {
          "aggregate": "count",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": {
        "type": "area",
        "interpolate": "monotone",
        "color": "#ff3c3ca1"
      },
      "transform": [
        {
          "filter": {
            "field": "Last Progress Update Date",
            "range": [
              {
                "year": 2000,
                "month": "jan",
                "date": 1
              },
              {
                "year": 2999,
                "month": "feb",
                "date": 20
              }
            ]
          }
        }
      ],
      "encoding": {
        "x": {
          "field": "Last Progress Update Date",
          "type": "temporal",
          "timeUnit": "yearmonth"
        },
        "y": {
          "aggregate": "count",
          "type": "quantitative"
        }
      }
    }
  ]
}
```

### With different scales

See <https://vega.github.io/vega-lite/docs/layer.html#combined-scales-and-guides>

Set `"resolve"` at the same level of `"layer"`

```json
"resolve": {"scale": {"y": "independent"}}
```

Set `"scale"` in `enconding.y`

```json
  "encoding": {
	"x": {
	  "field": "Last Progress Update Date",
	  "type": "temporal",
	  "timeUnit": "yearmonth"
	},
	"y": {
	  "aggregate": "count",
	  "type": "quantitative",
	  "title": "Responses per month",
	  "axis": {"titleColor": "#ff3c3ca1"},
	  "scale": {"domain": [0, 50]}
	}
  }
```

