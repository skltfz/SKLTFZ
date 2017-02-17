import * as React from 'react'
import { Link} from 'react-router'

export default React.createClass({
    render() {
        return (
            <table><tbody><tr>
                <td>
                    <div style={{ color: 'blue', fontSize: '30px' }}>
                        <h1>React Router Tutorial</h1>
                        <ul role="nav">
                            <li><Link to="/Page1">Page1</Link></li>
                            <li><Link to="/Page2">Page2</Link></li>
                        </ul>
                    </div>
                </td><td>{this.props.children}		</td></tr>
                <tr><td>{this.props.children}		</td></tr>
                </tbody>
            </table>
        )
    }
})
