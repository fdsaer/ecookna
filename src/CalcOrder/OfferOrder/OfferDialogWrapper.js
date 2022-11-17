const {
  React,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  Card,
  CardContent,
  CardActions,
  Grid
} = $p.ui;

class OfferDialogWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      renderAutoLines: false,
      displayOffer: false
    }

    this.changeRenderAutoLines = this.changeRenderAutoLines.bind(this);
    this.initPrint = this.initPrint.bind(this);
  }

  changeRenderAutoLines(value) {
    this.setState({
      ...this.state,

      renderAutoLines: value
    })
  }

  initPrint() {
    this.setState({
      ...this.state,

      displayOffer: true
    })
  }

  render() {
    const {
      renderAutoLines,
      displayOffer
    } = this.state;

    const {
      component: OfferComponent,

      ...props
    } = this.props

    if(displayOffer) {
      return <OfferComponent renderAutoLines={renderAutoLines} {...props} />
    }

    return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >

          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent>
                <FormControlLabel
                  label={"Рисовать размерные линии в эскизах?"}
                  control={<Checkbox checked={renderAutoLines} onChange={(e) => {this.changeRenderAutoLines(e.target?.checked)}} />}
                />
              </CardContent>

              <CardActions>
                <Button onClick={this.initPrint}>
                  Вывести
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
    )
  }
}

export default OfferDialogWrapper;
