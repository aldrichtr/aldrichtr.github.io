---
title: "Auditing Standards and Frameworks"
description: "Standards and Frameworks for recording and exchanging audit data"
date: 2022-04-22T15:53:52-04:00
draft: true
toc: true
image: img/post/default.png
categories:
  - Development
projects:
  - infraspective
series: "Introducing infraspective"
tags:
  - standards
---

One aspect of Infrastructure testing is to ensure that systems and services meet a ***standard***.  That standard
may be yours, your company's, or one published by a government, group or organization.  When it comes to
cybersecurity, there are several standards but (in my experience) the two major standards organizations are:

- National Institute of Standards and Technology (NIST)
- Center for Internet Security (CIS)

## Terminology

Before I get into the specifics of these two standards, I want to take a minute to define some terms.

**NOTE:** These are *my* definitions, unless explicitly stated otherwise.

Test
: A measurement of a configuration item or process.

Control
: A specific action (countermeasure) taken on a configuration item or process.

Profile
: A categorization of `Controls` that achieve a prescribed level of acceptance.

Example
> Id: L1
> Name: Level 1
> Title: "Corporate/Enterprise Environment"

Checklist
: A collection of Controls, logically grouped by the user, group or organization.

Benchmark
: An established collection of controls that define a "measurement milestone"


### A "Used Car" analogy 🚗

Let's say I want to buy a car from a used-car lot.  I want to ensure the car is going to last and is in good
working order, but I'm far from an expert in automotive maintenance.  So, I head to the internet and search for
"Chevrolet certified pre-owned checklist".  That leads me to a [172-Point Checklist][1]

![Tires and brakes group](/img/post/chevy-cpo-cl-1.png)

Ok, now that I have the `Checklist`, I can see that one of the `Groupings` is "Check Tires and Brake Pads", and
there is a minimum tire depth `Control`.  To validate the `Control`, I would measure (that is `Test`) the tire tread
depth of each tire, if they are >= 5/32nds they pass the `Test`, and if all four pass, then they pass the `Control`.


Notice the "Hybrid Vehicles" section at the end?
![Hybrid vehicles group](/img/post/chevy-cpo-cl-2.png).  If the car I wanted to buy was a hybrid, then I would use
the "Hybrid Vehicles" `Profile` which would change which `Controls` applied to this car from this `Checklist`.

If all of the tests pass, I can say that this meets the `Benchmark` of "Chevrolet certified pre-owned
vehicle".

### Test

In relation to Infrastructure testing, a `Test` is the atomic unit.  It is a comparison between an expected value
and the actual value.

Example
> Password history length >= 24


### Control

A `Control` is something that can be measured and marked as "Pass" or "Fail", and has associated "metadata".  For
example:

Example
> Id: 5.2
> Title: "Use Unique Passwords"
> Function: Protect
> Description: "Use unique passwords for all enterprise assets. Best practice ..."



### Grouping

A logical collection of related `Controls` to aid in categorizing and organization.
### Checklist

### Benchmark


> Id: 1.1.1
>
> Title: "Ensure 'Enforce password history' is set to '24 or more passwords'"
>
> Description: "This policy setting determines....."
>
> Rationale: "The longer a user uses the same password, the greater....."
>
> Impact: High
>
> Profile: L1
>
> Controls: 5.2


## NIST

As an organization that specializes in standards, NIST has a comprehensive Special Publication 800-53 (currently at Rev. 5)

## XCCDF

## CIS


[1]:
    <(https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/shopping-tools/certified-pre-owned/02-pdf/gmc1-12-02414checklist-fixed-v2-10-28-16.pdf)>
    "CPO Checklist"
