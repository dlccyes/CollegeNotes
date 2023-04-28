# Grafana

## Setup

Intall
```
brew install grafana
```

Start

```
brew services start grafana
```

Go to `http://localhost:3000`. Default admin & password are `admin`.

Stop

```
brew services stop grafana
```

## Notification

Alerting -> Contact points -> Add contact point

### Webhook

Integration = webhook

response schema

<https://grafana.com/docs/grafana/latest/alerting/manage-notifications/webhook-notifier/>