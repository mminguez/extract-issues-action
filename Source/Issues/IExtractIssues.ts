// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


import { PullsList } from '../PullsList';
import { IssuesList } from './IssuesList';

/**
 * Takes a JSON response from octokit.pulls.list() and parse it.
 *
 * @export
 * @interface IExtractIssues
 */
export interface IExtractIssues {
    
    /**
     * Establishes a {BuildContext} from the given github {Context}.
     * @param {PullsList} listOfPulls The raw pull requests list.
     * @returns {string[]} returns all the issue's links found in a pull request.
     */
    findIssuesLink(listOfPulls: PullsList): IssuesList[] | undefined;
}