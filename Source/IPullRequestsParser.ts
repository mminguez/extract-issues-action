// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


import { PullsList } from './PullsList';

/**
 * Takes a JSON response from octokit.pulls.list() and parse it.
 *
 * @export
 * @interface IPullRequestsParser
 */
export interface IPullRequestsParser {
    
    /**
     * Establishes a {BuildContext} from the given github {Context}.
     * @param {Promise<OctokitResponse<PullsListResponseData>>} pulls The raw pull requests list.
     * @returns {PullsList} A {Promise} that, when resolved, returns the {PullsList}.
     */
    parsePRList(pulls: any): PullsList | undefined;
}