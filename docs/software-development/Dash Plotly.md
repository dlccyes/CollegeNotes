# Dash Plotly

## Styling

### Components

- `dash-bootstrap-components`
- `Dash Mantine Components`

### Js & CSS

<https://dash.plotly.com/external-resources

## Form

To prevent the button from refreshing the page after being pressed, ADD `type='button` !!!!!

Like this

```python
html.Div(
        [
            html.H1("Add a new faculty member to MySQL"),
            html.Div(
                [
                    html.Form(
                        [
                            html.Label("Name:"),
                            dcc.Input(type="text", id="add-fac-name"),
                            html.Label("Position:"),
                            dcc.Input(type="text", id="add-fac-position"),
                            html.Label("Email:"),
                            dcc.Input(type="text", id="add-fac-email"),
                            html.Label("University ID:"),
                            dcc.Input(type="number", id="add-fac-uni"),
                            html.Button("Submit", id="add-fac-submit", n_clicks=0, type="button"),
                        ]
                    ),
                    html.Div(id="add-fac-form-response"),
                    dbc.Alert(
                        id="add-fac-form-alert",
                        is_open=False,
                        duration=4000,  # ms
                    ),
                ]
            ),
        ]
    )
```

<https://stackoverflow.com/a/71951866>