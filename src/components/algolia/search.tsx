"use client"

import * as React from "react";

import algoliasearch from "algoliasearch/lite";
import { 
    SearchBox,
    Hits,
} from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

const searchClient = algoliasearch(
    'BF3AZ5IBCF', 
    'd06e1a32a8c3a8f31ab24e98e2cd69c8'
);


export function Search() {
    return (
            <InstantSearchNext searchClient={searchClient} indexName="ui_portfolio">
                <SearchBox />
            </InstantSearchNext>
    )
}