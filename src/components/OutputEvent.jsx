/* eslint-disable react/jsx-key */
import React from 'react';

const div1Style = {
  color: 'blue',
};

const div2Style = {
  color: 'red',
};

// function to output label from temporals
// label represents a date, a single year or years regarding certain events
function TempInfo(temporals) {
  const temp = temporals.map((temps) => <div>{temps.label}</div>);
  return temp;
}

// function to output organisationType and label from organisations
// Organisation type can have values such as diocese or townland
// organisationtype
function OrgInfo(organisations) {
  const org = organisations.map((orgs) => (
    <div>
      <span>
        <b>{orgs.organisationType}</b>
      </span>
      {' : '}
      <span style={div1Style}>{orgs.label}</span>
    </div>
  ));
  return org;
}

// function to output relevant data for people which includes people names, their person type
// and in some cases their honorific prefix.
function PeopleInfo(people) {
  const peop = people.map((peops) => (
    <div>
      <span>
        <b>{peops.label}</b>
      </span>
      {' : '}
      <span style={div2Style}>{peops.personType}</span>
      <div>
        <b>{peops.honorificPrefix}</b>
      </div>
    </div>
  ));
  return peop;
}
// This function outputs each of the items from people, organisations and temporals
function OutputEvent(event) {
  const { label, people, organisations, temporals } = event;

  return (
    <div>
      <p>
        <b>{TempInfo(temporals)}</b>
        <b>Event</b> {' : '} <span className="Grey">{label}</span>
        {OrgInfo(organisations)}
        {PeopleInfo(people)}
      </p>
    </div>
  );
}

export default OutputEvent;
