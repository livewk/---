export default class $!NAME extends Component {
  render() {
    return $COMPONENT_BODY
  }
}

#if($PROP_TYPES)
$!{NAME}.propTypes = $PROP_TYPES
#end
