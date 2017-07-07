import React from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

require('./ReactGrid.css');

//images are for test
let smiley = require('../../images/smiley.png');
let smileySad = require('../../images/smiley-sad.png');


//Custom component
const customLocationComponentImage = ({...props})  =>(
    <div>
        <img onClick={() => console.log(props)} src={smiley} style={{cursor:'pointer'}} alt={'smiley'}/>
        <img onClick={() => console.log('that works! ' + props.value)} src={smileySad} style={{cursor:'pointer'}} alt={'smileySad'}/>
    </div>);

//Custom layout with just table
const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
    <div>
        <Table />
    </div>
);

//Custom styling for grid
const styleConfig = {
    icons: {
        TableHeadingCell: {
            sortDescendingIcon: '▼',
            sortAscendingIcon: '▲'
        },
    },
    classNames: {

    },
    styles: {
        TableHeading: { fontSize: 30 },
        TableHeadingCell: { borderBottom: '2px solid'},
        Cell: {borderBottom: '1px solid', padding:'5px', width:'200px'}
    }
};

//test data
const data = [
    {
        "Name": "Wilbur Yu",
        "Type": "Admin",
        "Email": "wilbur.yu@osterhoutgroup.com",
        "Joined": "2016-06-24 14:20:57",
        "Action": "Wilbur Yu",
    },
    {
        "Name": " devlogic test sarajevo",
        "Type": "Admin",
        "Email": "devlogicsarajevo@gmail.com",
        "Joined": "2016-03-11 04:26:35",
        "Action": "devlogic test sarajevo",
    },
    {
        "Name": "Denis Salkanovic",
        "Type": "Admin",
        "Email": "denis.salkanovic@devlogic.eu",
        "Joined": "2016-03-11 07:51:48",
        "Action": "Denis Salkanovic",
    },
    {
        "Name": "Wilbur Yu",
        "Type": "Admin",
        "Email": "wilbur.yu@osterhoutgroup.com",
        "Joined": "2016-06-24 14:20:57",
        "Action": "Wilbur Yu",
    },
    {
        "Name": " devlogic test sarajevo",
        "Type": "Admin",
        "Email": "devlogicsarajevo@gmail.com",
        "Joined": "2016-03-11 04:26:35",
        "Action": "Ovolo",
    },
    {
        "Name": "Denis Salkanovic",
        "Type": "Admin",
        "Email": "denis.salkanovic@devlogic.eu",
        "Joined": "2016-03-11 07:51:48",
        "Action": "Ovolo",
    },
];



class ReactGrid extends React.Component {

    render() {

        return (
            <Griddle
                data={data}
                plugins={[plugins.LocalPlugin]}
                components={{Layout: NewLayout}}
                styleConfig={styleConfig}>
                <RowDefinition>
                    <ColumnDefinition id="Name" title="Name" />
                    <ColumnDefinition id="Type" title="Type" />
                    <ColumnDefinition id="Email" title="Email" customComponent={null}/>
                    <ColumnDefinition id="Action" title="Action" customComponent={customLocationComponentImage}/>
                </RowDefinition>
            </Griddle>
        );
    }

}
export default  ReactGrid;
