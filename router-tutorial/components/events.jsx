import React, { useEffect, useState } from 'react';
import ReactDOM from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { commentlisti } from '../comment/comment__listi';
import { formButton } from '../formbutton/formButton';

const APIURL = process.env.REACT_APP_API_URL;

export const Events = ({
    id,
    onDelete,
    allEventsUrl,
    single = false,
    limit = -1,
    isLog,
    updLog,
    isNam,
}) => 