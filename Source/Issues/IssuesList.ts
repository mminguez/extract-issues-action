// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * The List of all Pull Requests and their summary.
 */
export type issueType = {
    link: string,
    operation: string
}
export type IssuesList = {
    pullRequestNum: number,
    issues: issueType[]
};
