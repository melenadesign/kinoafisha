// Core
import React, { Component } from 'react';

// Helpers
import { getStyles } from '../helpers';

export class Kinoafisha extends Component {
    state = {
        selectedFilter: 'upcoming',
    };

    _selectFilter = (event) => {
        const nextFilter = event.currentTarget.dataset.name;

        this.setState({
            selectedFilter: nextFilter,
        });
    };

    render() {
        const styles = getStyles(this.state);

        return (
            <>
                <div className = 'header'>
                    <div className = 'logo' />
                    <div className = 'filters'>
                        <div
                            className = { styles.latestFilter }
                            data-name = 'latest'
                            onClick = { this._selectFilter }>
                            <span>Новинки 2018</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
