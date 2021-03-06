import React from 'react';
import PropTypes from 'prop-types';

class BenchNav extends React.Component {
    render() {
        const tabs = {
            overview: "Overview",
            scenario: "Scenario",
            reports:  "Reports",
            logs:     "Logs"
        };

        return (
            <ul className="nav nav-tabs bench-nav">
                {Object.keys(tabs).map(function (tab) {
                    let name = tabs[tab];
                    let cssClass =  (this.props.selectedTab == tab) ? "active" : "";
                    let link = `#/bench/${this.props.bench.id}/${tab}`;
                    return (<li role="presentation" key={tab} className={cssClass}><a href={link}>{name}</a></li>);
                }.bind(this))}
            </ul>
        );
    }
};

BenchNav.propTypes = {
    bench: PropTypes.object.isRequired,
    selectedTab: PropTypes.string
};

BenchNav.defaultProps = {
    selectedTab: "overview"
};

export default BenchNav;
