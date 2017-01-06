'use strict'


app.service('TimeLineService', function($http) {
  console.log("in the TimeLineService")

    return {
        getTL: function() {
            return {

                "events": [{

                    "start_date": {
                        "year": "1955"
                    },
                    "text": {
                        "text": "<p>The African-American Civil Rights Movement (1955–1968) began.</p>"
                    }
                }, {

                    "start_date": {

                        "month": "8",
                        "day": "28",
                        "year": "1955"
                    },
                    "text": {
                        "text": "<p>Emmett Till  was kidnapped, beaten and murdered in Money, Mississippi  after reportedly flirting with a white woman; with the pictures of his open casket funeral, and the acquittal of his captors, the public reaction of Till's death helped spark the Civil Rights Movement.</p>"
                    }
                }, {

                    "start_date": {

                        "month": "12",
                        "day": "1",
                        "year": "1955"
                    },
                    "text": {
                        "text": "Rosa Parks  was arrested in Montgomery, Alabama  after refusing to give up her bus seat to a white passenger, inciting the 386-day Montgomery Bus Boycott Reverend Dr. Martin Luther King Jr."
                    }
                }, {
                    "start_date": {
                        "month": "9",
                        "day": "4",
                        "year": "1957"
                    },
                    "text": {

                        "text": "Arkansas National Guard was called to prevent African-American students from integrating in the Little Rock Central High School. They were known as the Little Rock Nine."
                    }
                }, {

                    "start_date": {
                        "month": "9",
                        "day": "23",
                        "year": "1957"
                    },
                    "text": {

                        "text": "The Civil Rights Act of 1957, primarily a voting rights bill, was signed into law."
                    }
                }, {
                    "start_date": {
                        "month": "1",
                        "day": "31",
                        "year": "1958"
                    },
                    "text": {
                        "text": "Explorer 1: The first U.S. satellite was launched into space."
                    }
                }, {
                    "start_date": {
                        "year": "1958"
                    },
                    "text": {
                        "text": "Jack Kilby invented the integrated circuit."
                    }
                },  {
                    "start_date": {
                      "month": "2",
                      "day": "4",
                      "year": "1959"
                    },
                    "text": {
                        "headline": "The Day the Music Died",
                        "text": "Musicians Buddy Holly, Ritchie Valens, J. P. 'The Big Bopper' Richardson, and pilot, Roger Peterson, were killed in a plane accident."
                    }
                }, {

                    "start_date": {
                      "month": "2",
                      "day": "1",
                      "year": "1960"
                    },
                    "text": {

                        "text": "The Greensboro sit-ins, sparked by the refusal of four African American college students to move from a segregated lunch counter, began similar widespread acts of civil disobedience  to protest Jim Crow laws."
                    }
                },  {
                    "start_date": {
                      "month": "5",
                      "day": "1",
                      "year": "1960"
                    },
                    "text": {

                        "text": "  CIA U-2 spy plane was shot down while flying a reconnaissance mission over Soviet airspace."
                    }
                }, {
                    "start_date": {
                      "month": "12",
                      "day": "5",
                      "year": "1960"
                    },
                    "text": {

                        "text": "Boynton v. Virginia: In a 7–2 ruling, the Supreme Court ruled that African-Americans were protected from racial segregation on buses by the Interstate Commerce Act."
                    }
                }, {
                    "start_date": {
                      "month": "1",
                      "day": "3",
                      "year": "1961"
                    },
                    "text": {
                        "text": "The United States broke diplomatic relations  with Cuba."
                    }
                }, {

                    "start_date": {
                      "month": "3",
                      "day": "1",
                      "year": "1961"
                    },
                    "text": {

                        "text": "President Kennedy signed Executive Order 10924, establishing the Peace Corps."
                    }
                }, {

                    "start_date": {
                      "month": "4",
                      "day": "17",
                      "year": "1961"
                    },
                    "text": {
                        "text": "Bay of Pigs Invasion: The failed U.S. led invasion and attempted coup d'état of Cuban Prime Minister Fidel Castro took place."
                    }
                }, {

                    "start_date": {
                      "month": "5",
                      "day": "4",
                      "year": "1961"
                    },
                    "text": {

                        "text": "The Freedom Rides began in Washington D.C. after the failure to enforce the Supreme Court's ruling in Boynton v. Virginia."
                    }
                }, {

                    "start_date": {

                      "year": "1961"
                    },
                    "text": {

                        "text": "Alan Shepard piloted the Freedom 7 capsule to become the first American in space.",
                        "text": "President Kennedy proposed the Apollo program, with the goal of 'landing a man on the moon and returning him safely to the earth'."
                    }
                }, {

                    "start_date": {
                        "month": "2",
                        "day": "20",
                        "year": "1962"
                    },
                    "text": {
                        "text": "John Glenn  orbited the Earth."
                    }
                }, {

                    "start_date": {
                        "month": "8",
                        "day": "5",
                        "year": "1962"
                    },
                    "text": {
                        "text": "Marilyn Monroe  died of an apparent overdose from acute barbiturate poisoning  at age thirty-six."
                    }
                }, {

                    "start_date": {
                        "month": "10",
                        "day": "14",
                        "year": "1962"
                    },
                    "text": {

                        "text": "Cuban missile crisis: A nuclear confrontation took place between the United States and the Soviet Union"
                    }
                }, {

                    "start_date": {
                        "month": "4",
                        "day": "16",
                        "year": "1963"
                    },
                    "text": {
                        "text": "Letter from a Birmingham Jail: Dr. King was arrested amid the Birmingham campaign, writing an open letter defending the strategy nonviolent protest."
                    }
                }, {

                    "start_date": {
                        "month": "8",
                        "day": "28",
                        "year": "1963"
                    },
                    "text": {
                        "text": "March on Washington for Jobs and Freedom Dr. Martin Luther King Jr., among other notable civil rights leaders, spoke on the Lincoln Memorial , giving his historic 'I Have a Dream' speech at the march that drew over 200,000 demonstrators."
                    }
                }, {

                    "start_date": {
                        "month": "9",
                        "day": "15",
                        "year": "1963"
                    },
                    "text": {
                        "text": "The 16th Street Baptist Church bombing, carried out by a KKK  splinter group, killed four African-American girls in what was seen as a turning point for the Civil Rights Movement."
                    }
                }, {

                    "start_date": {
                        "month": "10",
                        "day": "22",
                        "year": "1963"
                    },
                    "text": {
                        "text": "President John F. Kennedy was assassinated by a sniper in Dallas, Texas while traveling in an open presidential motorcade with Texas GovernorPresident assassinated  by a sniper in John Connally , who was injured in the incident."
                    }
                }, {

                    "start_date": {
                        "month": "2",
                        "day": "7",
                        "year": "1964"
                    },
                    "text": {
                        "text": "British Invasion: The Beatles  arrived in the United States."
                    }
                }, {

                    "start_date": {

                        "year": "1964"
                    },
                    "text": {
                        "text": "B  The Freedom Summer began, aimed to increase voter registration for African Americans."
                    }
                }, {

                    "start_date": {
                        "month": "7",
                        "day": "2",
                        "year": "1964"
                    },
                    "text": {
                        "text": "The Civil Rights Act of 1964, outlawing both segregation and major forms of discrimination against blacks and women, was signed into law."
                    }
                }, {

                    "start_date": {
                        "month": "8",
                        "day": "4",
                        "year": "1964"
                    },
                    "text": {
                        "text": "Mississippi civil rights workers' murders: The bodies of three missing civil rights activists, working to register voters as a part of the Freedom Summer, were found near Philadelphia, Mississippi."
                    }
                }, {

                    "start_date": {
                        "month": "8",
                        "day": "20",
                        "year": "1964"
                    },
                    "text": {
                        "text": "The Gulf of Tonkin Resolution, not a formal declaration of war in Vietnam, was signed by President Johnson."
                    }
                }, {

                    "start_date": {
                        "month": "12",
                        "day": "10",
                        "year": "1964"
                    },
                    "text": {
                        "text": "Dr. King became the youngest person ever to be awarded the Nobel Peace Prize, for his 'nonviolent campaign against racism'."
                    }
                }, {

                    "start_date": {

                        "year": "1965"
                    },
                    "text": {
                        "text": "Johnson escalates United States military involvement in the Vietnam War, with the number of U.S. troops totaling more than 184,000."
                    }
                }, {

                    "start_date": {
                        "month": "2",
                        "day": "21",
                        "year": "1965"
                    },
                    "text": {
                        "text": "African American Muslim minister and human rights activist Malcolm X  was assassinated at theAudubon Ballroom in Harlem, New York."
                    }
                }, {

                    "start_date": {
                        "month": "3",
                        "day": "7",
                        "year": "1965"
                    },
                    "text": {
                        "text": "The Selma to Montgomery marches, known as 'Bloody Sunday', drew national outrage after Alabama State Troopers severely beat and used tear gas against the nonviolent demonstrators."
                    }
                }, {

                    "start_date": {
                        "month": "3",
                        "day": "25",
                        "year": "1965"
                    },
                    "text": {
                        "text": "In a third attempt to march from Selma  to Montgomery , 3,200 civil rights demonstrators reached the Alabama State Capitol , where they were joined with a crowd of 25,000, after four days of marching."
                    }
                }, {

                    "start_date": {
                        "month": "4",
                        "day": "17",
                        "year": "1965"
                    },
                    "text": {
                        "text": "March Against the Vietnam War: The Students for a Democratic Society (SDS) and the SNCC led the first major anti-war demonstration against the Vietnam War  in Washington, D.C., with over 25,000 protesters."
                    }
                }, {

                    "start_date": {
                        "month": "6",
                        "day": "13",
                        "year": "1966"
                    },
                    "text": {
                        "text": "Miranda v. Arizona: The Supreme Court ruled that not informing suspects held in custody on their right to counsel and silence violated protection against self incrimination, establishing what later became known as Miranda rights."
                    }
                }, {

                    "start_date": {
                        "month": "6",
                        "day": "30",
                        "year": "1966"
                    },
                    "text": {
                        "text": "The feminist group the National Organization for Women  (NOW) was formed."
                    }
                }, {

                    "start_date": {
                        "month": "1",
                        "day": "8",
                        "year": "1967"
                    },
                    "text": {
                        "text": "Operation Cedar Falls, the largest ground operation of the Vietnam War, began; with over 500,000 with the number of U.S. troops totaling more than 500,000by the end of 1967."
                    }
                }, {

                    "start_date": {

                        "year": "1967"
                    },
                    "text": {
                        "text": "The Summer of Love took place, marking a defining period for the counterculture movement in the U.S."
                    }
                }, {

                    "start_date": {
                        "month": "6",
                        "day": "12",
                        "year": "1967"
                    },
                    "text": {
                        "text": "The Supreme Court overruled the prohibition of interracial marriage."
                    }
                }, {

                    "start_date": {
                        "month": "10",
                        "day": "2",
                        "year": "1967"
                    },
                    "text": {
                        "text": "Thurgood Marshall was sworn in as an Associate Justice of the Supreme Court, becoming the first African-American Justice to serve on the court."
                    }
                }, {

                    "start_date": {
                        "month": "1",
                        "day": "30",
                        "year": "1968"
                    },
                    "text": {
                        "text": "The Tet Offensive, a campaign of surprise attacks by the Viet Cong, began."
                    }
                }, {

                    "start_date": {
                        "month": "4",
                        "day": "4",
                        "year": "1968"
                    },
                    "text": {
                        "text": "Civil rights leader Martin Luther Kind, Jr was assassinated  by a sniperin Memphis, Tennessee."
                    }
                }, {

                    "start_date": {
                        "month": "6",
                        "day": "5",
                        "year": "1968"
                    },
                    "text": {
                        "text": "Robert F. Kennedy  was assassinated  at the Ambassador Hotel  in Los Angeles by Sirhan Sirhan , after winning the California primary while campaigning for President."
                    }
                }, {

                    "start_date": {
                        "month": "3",
                        "day":"18",
                        "year": "1969"
                    },
                    "text": {
                        "text": "Operation Menu: The United States began its covert bombings of North Vietnamese  positions in Cambodia and Laos."
                    }
                }, {

                    "start_date": {
                      "month": "6",
                      "day":"29",
                      "year": "1969"
                    },
                    "text": {
                        "text": "The Stonewall riots took place, beginning after police raided the Stonewall Inn  in New York City, which would mark the start of the modern gay liberation movement in the United States."
                    }
                }, {

                    "start_date": {
                      "month": "7",
                      "day":"18",
                      "year": "1969"
                    },
                    "text": {
                        "text": "Chappaquiddick incident Senator Edward M. Kennedy  drove off a bridge on his way home from a party on Chappaquiddick Island, killing his passenger, Mary Jo Kopechne ."
                    }
                }, {

                    "start_date": {
                      "month": "7",
                      "day":"20",
                      "year": "1969"
                    },
                    "text": {
                        "text": "Apollo 11: Americans astronauts Neil Armstrong, Buzz Aldrin  and Michael Collins  became the first men to land on the moon , with Armstrong becoming the first man to walk on the moon's surface."
                    }
                }, {

                    "start_date": {
                      "month": "8",
                      "day":"15",
                      "year": "1969"
                    },
                    "text": {
                        "text": "The Woodstock Music & Art Fair, proclaimed as 'three days of peace and music' became one of the defining events representing counterculture movement."
                    }
                }, {

                    "start_date": {
                      "month": "11",
                      "day":"8",
                      "year": "1969"
                    },
                    "text": {
                        "text": "Sesame Street premiered on National Educational Television."
                    }
                }, {

                    "start_date": {
                      "month": "12",
                      "day":"15",
                      "year": "1969"
                    },
                    "text": {
                        "text": "President Nixon announces the withdrawal of 50,000 U.S. troops from Vietnam; reaching the peak level of U.S. troops in Vietnam at 541,000."
                    }
                }, {

                    "start_date": {
                      "month": "1",
                      "day":"13",
                      "year": "1970"
                    },
                    "text": {
                        "text": "The United States Court of Appeals for the Third Circuit  held in a decision in Equal Pay Act of 1963  even for different jobs with substantially equal responsibilities."
                    }
                }, {

                    "start_date": {
                      "month": "3",
                      "day":"6",
                      "year": "1970"
                    },
                    "text": {
                        "text": "Greenwich Village townhouse explosion: An accidental explosion in New York City killed three members of the Weather Underground."
                    }
                }, {

                    "start_date": {
                      "month": "5",
                      "day":"4",
                      "year": "1970"
                    },
                    "text": {
                        "text": "Kent State shootings: The Ohio Army National Guard  fired on a crowd of students protesting the Cambodian Campaign at Kent State University, killing four and injuring nine others."
                    }
                }, {

                    "start_date": {
                        "month": "6",
                        "year": "1971"
                    },
                    "text": {
                        "text": "Pentagon Papers: The New York Times  publishes its first story on the classified 7,000-page Department of Defense study, leaked by study participant Daniel Ellsberg , on the U.S.'s political-military involvement in Vietnam since 1945."
                    }
                }, {

                    "start_date": {
                      "month": "6",
                      "day":"17",
                      "year": "1972"
                    },
                    "text": {
                        "text": "Watergate burglaries: Five men were arrested for the burglary of the Democratic National Committee headquarters at the Watergate complex  in Washington, D.C."
                    }
                }, {

                    "start_date": {
                        "month": "1",
                        "year": "1973"
                    },
                    "text": {
                        "text": "Roe v. Wade: The Supreme Court ruled that state laws banning abortion before 24 weeks as unconstitutional."
                    }
                }, {

                    "start_date": {
                      "month": "8",
                      "day":"9",
                      "year": "1974"
                    },
                    "text": {
                        "text": "President Richard Nixon  becomes the first and only President to resign from office. After submitting his resignation in an address to the nation the evening before, Nixon stated that 'the interest of the Nation must always come before any personal considerations'."
                    }
                }, {

                    "start_date": {
                        "month": "4",
                        "year": "1975"
                    },
                    "text": {
                        "text": "Bill Gates founded Microsoft."
                    }
                }, {

                    "start_date": {
                      "month": "11",
                      "day":"2",
                      "year": "1976"
                    },
                    "text": {
                        "text": "U.S. presidential election, 1976: Jimmy Carter defeats incumbent Gerald Ford, becoming the first candidate from the Deep South to win since the Civil War."
                    }
                }, {

                    "start_date": {
                        "month": "5",
                        "year": "1977"
                    },
                    "text": {
                        "text": "Star Wars is released and goes on to become the highest-grossing film of its time."
                    }
                }, {

                    "start_date": {
                      "month": "11",
                      "day":"27",
                      "year": "1978"
                    },
                    "text": {
                        "text": "Moscone–Milk assassinations: Harvey Milk , the first openly gay person elected to public office, and San Francisco Mayor  George Moscone , were assassinated by Dan White in San Francisco."
                    }
                }, {

                    "start_date": {
                        "month": "11",
                        "year": "1979"
                    },
                    "text": {
                        "text": "Iran hostage crisis: The U.S. embassy in Tehran  was raided by student activists of the Iranian Revolution  after overthrown CIA instated Shah Mohammad Reza Pahlavi was allowed into the U.S.; beginning the 444-day capture of the embassy and the holding of fifty-two American embassy personnel."
                    }
                }, {

                    "start_date": {
                      "month": "12",
                      "day":"8",
                      "year": "1980"
                    },
                    "text": {
                        "text": "Musician John Lennon  was assassinated  outside of The Dakota in New York City."
                    }
                }, {

                    "start_date": {
                        "month": "3",
                        "year": "1981"
                    },
                    "text": {
                        "text": "Reagan assassination attempt: President Reagan and three others were injured after an assassination attempt of the President by Hilton Washington in Washington D.C."
                    }
                }, {

                    "start_date": {
                        "month": "6",
                        "year": "1982"
                    },
                    "text": {
                        "text": "Anti-nuclear protests  were held at Central Park  in New York City, with nearly one million peaceful demonstrators protesting the arms race ."
                    }
                }, {

                    "start_date": {
                        "month": "4",
                        "year": "1983"
                    },
                    "text": {
                        "text": "1983 United States embassy bombing: The U.S. embassy in Beirut  was bombed by members of the Islamic Jihad Organization  (IJO), killing 63 people, including 17 U.S. government personnel."
                    }
                }, {

                    "start_date": {
                        "month": "4",
                        "year": "1984"
                    },
                    "text": {
                        "text": "U.S. Secretary of Health and Human Services Margaret Heckler announces Dr. Robert Gallo  and fellow NCI  researcher's discovery of HTLV-III  as the virus that causes AIDS."
                    }
                }, {

                    "start_date": {
                        "month": "6",
                        "year": "1985"
                    },
                    "text": {
                        "text": "Live Aid, a concert attended by 100,000 people and watched by 1.9 billion viewers in 150 countries at the John F. Kennedy Stadium in Philadelphia , was held, raising global awareness of famine in Ethiopia."
                    }
                }, {

                    "start_date": {
                        "month": "4",
                        "year": "1986"
                    },
                    "text": {
                        "text": "Space Shuttle Challenger disaster: The Space Shuttle Challenger exploded due to a leak in the shuttle's solid rocket booster  73 seconds after departing from the Kennedy Space Center , killing all seven crew members aboard, including school teacher Christa McAuliffe ."
                    }
                }, {

                    "start_date": {
                        "month": "10",
                        "year": "1987"
                    },
                    "text": {
                        "text": "Black Monday: The Dow Jones Industrial Average  fell 508 points in a single session, losing 22.6% of its value"
                    }
                }, {

                    "start_date": {
                        "month": "11",
                        "year": "1988"
                    },
                    "text": {
                        "text": "Morris worm , the first computer worm  distributed via the Internet, was launched."
                    }
                }, {

                    "start_date": {
                        "month": "12",
                        "year": "1989"
                    },
                    "text": {
                        "text": "The United States invades Panama in an attempt to overthrow military dictator Manuel Noriega, who had been indicted in the United States on drug trafficking charges and was accused of suppressing democracy in Panama and endangering U.S. nationals."
                    }
                }, {

                    "start_date": {
                        "month": "8",
                        "year": "1990"
                    },
                    "text": {
                        "text": "Gulf War: Iraqi President Saddam Hussein  leads the deployment of 140,000 Iraqi troops in the invasion of Kuwait."
                    }
                }]
            }



        }
    }

})
