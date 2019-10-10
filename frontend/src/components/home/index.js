import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import * as axios from 'axios';

export default class HomeComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            surveys: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3030/surveys").then((data) => {
            console.log(data);
            this.setState({ surveys: data });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const { surveys } = this.state;
        const img = "";
        return (
            <GridList cellHeight={180}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Survey List</ListSubheader>
                </GridListTile>
                {surveys.map(survey => (
                    <GridListTile key={survey.id}>
                        <img src={img} alt={survey.name} />
                        <GridListTileBar
                            title={survey.name}
                            subtitle={<span>by: {survey.created_by}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${survey.name}`}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        );
    }
}