---
layout: meth
parent: Software Development
---

# Airtable

## Sync into a PostgreSQL database with Sequin

Follow [this guide](https://docs.retool.com/docs/interact-with-airtable)

1. Go to Airtable -> Account -> API Key to get your API key
2. Go to Sequin -> Add Sync -> Airtable -> Enter your API key & other things
	- you can let Sequin host a new postgres instance for you
3. Now the database will be auto synced with your Airtable!

## Connect with Retool

Retool can't directly connect withh Airtable, so connect it to a db synced with Airtable instead.