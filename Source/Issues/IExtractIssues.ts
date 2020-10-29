// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

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
     * @param {string[]} listOfPulls The raw pull requests list.
     * @returns {IssuesList[]} returns all the issue's links found in a pull request.
     */
    findIssuesLink(listOfPulls: string[]): IssuesList[] | undefined;
}