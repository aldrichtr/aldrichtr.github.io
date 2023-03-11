---
draft: false
date: 2022-04-18T16:58:16-05:00

# ---------------------------------------------
#region Heading
title: "Infrastructure Testing With Pester"
subtitle: "Using Behavior Driven Design testing to validate your infrastructure"
description: "A walkthrough of using Pester to test your infrastructure"
author: "Tim Aldrich"

#endregion Heading
# ---------------------------------------------
# #region image
featuredImage: pester_v5.png
featuredImagePreview: featured-preview.png

# #endregion image
# ---------------------------------------------


hiddenFromHomePage: false
hiddenFromSearch: false
# metadata
categories:
  - IaC
tags:
  - powershell
  - pester
series:
  - "intro-to-infraspective"
keywords: []


# ---------------------------------------------
# LoveIt theme features

twemoji: true
ruby: true
fraction: true
fontawesome: true
mapbox: false

---

Use PowerShell's de facto standard unit testing module to validate your infrastructure is deployed and configured to
your specifications.

## What is "Infrastructure Testing"

In my own words, infrastructure testing is:

_validating that a configuration item is the value that you expect it to be._

For example:

- Is the Operating System Windows Server?
- Is the DNS service running?
- Is the count of members of the local 'Administrators' group 3?

As a sysadmin, these are things that I would check on as part of my daily operations tasks, and also things that I
would check on during troubleshooting.  But as infrastructure gets larger; spanning across multiple environments,
multiple layers of virtualization and multiple vendors, versions and applications it becomes too complex and time
consuming to do without automation.

## Pester testing module

Most programming languages have a testing library that allows the developer to write tests that validate that their
code does what is expected.  PowerShell is no different, and the de-facto module for those tests is
[Pester](https://pester.dev)

Pester follows the [Behavior Driven
Design](https://en.wikipedia.org/wiki/Behavior-driven_development#Story_versus_specification) "specification"
language; mainly the use of `Describe`, `Context`, `It`, and `Should`.  These four "Domain Specific Language (DSL)"
keywords allow you to write a test that sounds a lot like natural language.

here is an example straight from the Pester documentation:

```powershell
BeforeAll {
    function Get-Planet ([string]$Name = '*') {
        $planets = @(
            @{ Name = 'Mercury' }
            @{ Name = 'Venus'   }
            @{ Name = 'Earth'   }
            @{ Name = 'Mars'    }
            @{ Name = 'Jupiter' }
            @{ Name = 'Saturn'  }
            @{ Name = 'Uranus'  }
            @{ Name = 'Neptune' }
        ) | ForEach-Object { [PSCustomObject] $_ }

        $planets | Where-Object { $_.Name -like $Name }
    }
}

Describe 'Get-Planet' {
    It 'Given no parameters, it lists all 8 planets' {
        $allPlanets = Get-Planet
        $allPlanets.Count | Should -Be 8
    }
}
```

## Operations Validation Framework

One of the first modules that used Pester to test infrastructure was [Operation Validation
Framework](https://github.com/PowerShell/Operation-Validation-Framework).  Although the project was abandoned about
3 years ago, it is still available to download from github and the powershell gallery.

{{< admonition type=warning title="Breaking Changes" open=true >}}
**WARNING** OVF was based on an older version of Pester, and Pester has made some [breaking
changes](https://pester.dev/docs/migrations/breaking-changes-in-v5) in version 5.  It probably wont work if you try
to use it on a modern system.

{{< /admonition >}}
That said, the design of OVF was strait-forward:  Create a module structure with your tests organized into two
folders: `Diagnostics\Simple` and `Diagnostics\Comprehensive`.  These files use the Pester default file naming
convention, `*.Tests.ps1`.

With your tests organized in this way, calling `Invoke-OperationValidation` will run the Pester tests in the folders
and produce a report of the test name and result.

See the example in the README.md

## Poshspec

[poshspec](https://github.com/ticketmaster/poshspec) added some very useful terms to the DSL, such as `File`,
`Hotfix`, etc.  There is a list of them on the [wiki](https://github.com/Ticketmaster/poshspec/wiki/Introduction).
This made the tests even more like natural language.

Unfortunately, this site also stopped being updated around the same time as OVF, and has the same issues when
running with Pester v5

## PSRemotely

Lastly, [psremotely](https://github.com/DexterPOSH/PSRemotely) was another PowerShell infrastructure testing module
based on Pester.  It also had its own DSL terms such as `Nodes` to describe the "target" computers to run the tests
on.

Where OVF ran the tests locally, PSRemotely ran them, well .... remotely.  The idea was to copy the tests and all
the modules, scripts and resources required to run them to the remote system, run the tests and then retrieve the
results and write them to the local machine as a json object.
