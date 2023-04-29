---
layout: meth
parent: Software Development
---

# Airtable

## Check status

<https://status.airtable.com/>

## View base usage in your workspace

Different plans have different limits. To see your current usage, go to **account -> workspaces**

## Sync into a PostgreSQL database with Sequin

Follow [this guide](https://docs.retool.com/docs/interact-with-airtable)

1. Go to Airtable -> Account -> API Key to get your API key
2. Go to Sequin -> Add Sync -> Airtable -> Enter your API key & other things
	- you can let Sequin host a new postgres instance for you
3. Now the database will be auto synced with your Airtable!

## Connect with Retool

Retool can't directly connect withh Airtable, so connect it to a db synced with Airtable instead.

## Vega-Lite

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