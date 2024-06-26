import React from "react";
import { Text, Img, Heading, Button, Input } from "../../components";
import { Link } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

export default function LandingPagePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[95px] bg-white-A700">
        <Header />
        <div className="flex flex-col items-center justify-start w-full gap-[159px] md:px-5 max-w-[1111px]">
          <div className="flex flex-row justify-center w-[93%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[43px] md:gap-5">
                <Img
                  src="images/img_brand_1.svg"
                  alt="brandone_one"
                  className="h-[61px] w-[61px] mt-[66px] md:mt-0"
                />
                <div className="flex flex-col items-center justify-start w-[80%] md:w-full mb-9 gap-[30px]">
                  <Heading
                    size="3xl"
                    as="h1"
                    className="!font-merriweather text-center"
                  >
                    Share via writing and podcasts, hope you enjoy
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="w-[78%] !text-gray-600 text-center leading-[35px]"
                  >
                    Increase your knowledge by reading new things and I will
                    share whatever I know for you, as long as I enjoy it
                  </Text>
                </div>
                <Img
                  src="images/img_blog_1.svg"
                  alt="blogone_one"
                  className="h-[61px] w-[61px] mt-[205px] md:mt-0"
                />
              </div>
              <div className="flex flex-row sm:flex-col justify-start w-[51%] md:w-full mt-[-4px] gap-[25px] sm:gap-5">
                <Link to="blogdetails">
                  <Button
                    color="indigo_900_01"
                    size="4xl"
                    className="sm:px-5 !text-white-A700 tracking-[0.12px] shadow-sm min-w-[221px] rounded-[35px]"
                  >
                    Read More
                  </Button>
                </Link>
                <Link to="/bloggerdetails">
                  <Button
                    color="indigo_200"
                    size="4xl"
                    variant="outline"
                    className="sm:px-5 tracking-[0.12px] min-w-[271px] rounded-[35px]"
                  >
                    Listen to Podcasts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <div className="flex flex-col items-center justify-start w-full gap-[17px]">
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[39%] sm:w-full gap-[18px] sm:gap-5">
                  <Button
                    color="gray_300"
                    size="7xl"
                    shape="circle"
                    className="w-[76px]"
                  >
                    <Img src="images/img_podcast_1.svg" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[79%] sm:w-full gap-2">
                    <Heading
                      size="xl"
                      as="h2"
                      className="ml-0.5 md:ml-0 !font-merriweather text-center !font-black"
                    >
                      Latest Podcasts{" "}
                    </Heading>
                    <Text
                      size="lg"
                      as="p"
                      className="!text-gray-600 tracking-[0.12px] text-center"
                    >
                      Get started on latest episodes
                    </Text>
                  </div>
                </div>
                <a href="#">
                  <Heading
                    size="xs"
                    as="h3"
                    className="!text-indigo-900 tracking-[0.12px] hover:font-light"
                  >
                    See all podcasts
                  </Heading>
                </a>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-[22px]">
                <div className="flex flex-col items-center justify-center w-[24%] md:w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                  <div className="h-[207px] w-full mt-[7px] relative">
                    <Img
                      src="images/img_rectangle_9.png"
                      alt="image"
                      className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                    />
                    <Button
                      color="gray_600_01"
                      shape="circle"
                      className="w-[72px] top-[30%] right-0 left-0 m-auto absolute"
                    >
                      <Img src="images/img_play.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mb-[5px] gap-2.5">
                    <Heading size="s" as="h4" className="!font-merriweather">
                      The secrets of writing a good book
                    </Heading>
                    <Text size="xs" as="p">
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[24%] md:w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                  <div className="h-[207px] w-full mt-[7px] relative">
                    <Img
                      src="images/img_rectangle_9_207x233.png"
                      alt="image"
                      className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                    />
                    <Button
                      color="gray_600_01"
                      shape="circle"
                      className="w-[72px] top-[30%] right-0 left-0 m-auto absolute"
                    >
                      <Img src="images/img_play.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mb-[5px] gap-2.5">
                    <Heading size="s" as="h5" className="!font-merriweather">
                      The secrets of writing a good book
                    </Heading>
                    <Text size="xs" as="p">
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[24%] md:w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                  <div className="h-[207px] w-full mt-[7px] relative">
                    <Img
                      src="images/img_rectangle_9_1.png"
                      alt="image"
                      className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                    />
                    <Button
                      color="gray_600_01"
                      shape="circle"
                      className="w-[72px] top-[30%] right-0 left-0 m-auto absolute"
                    >
                      <Img src="images/img_play.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mb-[5px] gap-2.5">
                    <Heading size="s" as="h6" className="!font-merriweather">
                      The secrets of writing a good book
                    </Heading>
                    <Text size="xs" as="p">
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[24%] md:w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                  <div className="h-[207px] w-full mt-[7px] relative">
                    <Img
                      src="images/img_rectangle_9_2.png"
                      alt="image"
                      className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                    />
                    <Button
                      color="gray_600_01"
                      shape="circle"
                      className="w-[72px] top-[30%] right-0 left-0 m-auto absolute"
                    >
                      <Img src="images/img_play.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mb-[5px] gap-2.5">
                    <Heading size="s" as="h6" className="!font-merriweather">
                      The secrets of writing a good book
                    </Heading>
                    <Text size="xs" as="p">
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
              <div className="flex flex-row sm:flex-col justify-start items-center w-[39%] sm:w-full gap-[18px] sm:gap-5">
                <Button
                  color="gray_300"
                  size="7xl"
                  shape="circle"
                  className="w-[76px]"
                >
                  <Img src="images/img_blog_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[79%] sm:w-full gap-2">
                  <Heading
                    size="xl"
                    as="h2"
                    className="ml-0.5 md:ml-0 !font-merriweather text-center !font-black"
                  >
                    Latest Blogs{" "}
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="!text-gray-600 tracking-[0.12px] text-center"
                  >
                    Get started on latest blogs
                  </Text>
                </div>
              </div>
              <a href="/blogdetails">
                <Heading
                  size="xs"
                  as="h3"
                  className="!text-indigo-900 tracking-[0.12px] hover:font-light"
                >
                  See all blogs
                </Heading>
              </a>
            </div>
            <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[29px] md:gap-5">
              <div className="flex flex-col items-end justify-start w-[66%] md:w-full gap-[50px]">
                <div className="flex flex-col w-full gap-[50px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                        <div className="flex flex-row justify-start items-center w-[34%] sm:w-full gap-3.5">
                          <Img
                            src="images/img_ellipse_5.png"
                            alt="by_jhone"
                            className="h-[70px] w-[70px] md:h-auto rounded-[50%]"
                          />
                          <div className="flex flex-col items-start justify-start w-[66%] gap-[3px]">
                            <Heading
                              as="h6"
                              className="!text-blue_gray-600 text-center !font-semibold"
                            >
                              By Jhone Leonardo
                            </Heading>
                            <Text size="xs" as="p" className="text-center">
                              12 September, 2020
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Heading
                        size="2xl"
                        as="h1"
                        className="mt-[30px] ml-0.5 md:ml-0 tracking-[0.12px] !font-merriweather italic"
                      >
                        Consistent way of working to train yourself
                      </Heading>
                      <Img
                        src="images/img_rectangle_11.png"
                        alt="image"
                        className="w-full md:h-[390px] mt-[29px] ml-0.5 md:ml-0 object-cover rounded-[5px]"
                      />
                      <Text
                        as="p"
                        className="mt-[30px] ml-0.5 md:ml-0 !text-blue_gray-900 leading-[30px]"
                      >
                        We all know that every person has his or her own desire
                        to work, but do you know that we can actually be
                        consistent in making works if we want, now in this
                        article I want to invite all of you to learn to be
                        consistent in creating.
                      </Text>
                      <div className="flex flex-row sm:flex-col justify-between w-[65%] md:w-full mt-[19px] sm:gap-10">
                        <div className="flex flex-row justify-start items-center gap-2.5">
                          <Button
                            color="light_blue_50"
                            size="xl"
                            className="w-[55px] rounded-[27px]"
                          >
                            <Img src="images/img_clock_1.svg" />
                          </Button>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 text-center"
                          >
                            5 minutes ago
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5">
                          <Button
                            color="lime_50"
                            size="xl"
                            className="w-[55px] rounded-[27px]"
                          >
                            <Img src="images/img_like_1.svg" />
                          </Button>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 text-center"
                          >
                            12 Like
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5">
                          <Button
                            color="red_50"
                            size="xl"
                            className="w-[55px] rounded-[27px]"
                          >
                            <Img src="images/img_send_1_1.svg" />
                          </Button>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 text-center"
                          >
                            Share
                          </Text>
                        </div>
                      </div>
                      <Link to="/blogpage">
                        <Button
                          color="indigo_900_01"
                          size="5xl"
                          shape="round"
                          rightIcon={
                            <Img
                              src="images/img_arrowpointingtoright_1.svg"
                              alt="arrow-pointing-to-right 1"
                            />
                          }
                          className="mt-5 gap-[19px] sm:px-5 tracking-[0.12px] font-bold min-w-[255px] hover:bg-sky-500 sm:min-w-full"
                        >
                          <text className="!text-white-A700 ml-6">
                            Continue Reading
                          </text>
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                        <div className="flex flex-row justify-start items-center w-[34%] sm:w-full gap-3.5">
                          <Img
                            src="images/img_ellipse_5.png"
                            alt="circleimage"
                            className="h-[70px] w-[70px] md:h-auto rounded-[50%]"
                          />
                          <div className="flex flex-col items-start justify-start w-[66%] gap-[3px]">
                            <Heading
                              as="h6"
                              className="!text-blue_gray-600 text-center !font-semibold"
                            >
                              By Jhone Leonardo
                            </Heading>
                            <Text size="xs" as="p" className="text-center">
                              12 September, 2020
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Heading
                        size="2xl"
                        as="h1"
                        className="mt-[30px] ml-0.5 md:ml-0 tracking-[0.12px] !font-merriweather italic"
                      >
                        Consistent way of working to train yourself
                      </Heading>
                      <Img
                        src="images/img_rectangle_11_390x728.png"
                        alt="image"
                        className="w-full md:h-[390px] mt-[29px] ml-0.5 md:ml-0 object-cover rounded-[5px]"
                      />
                      <Text
                        as="p"
                        className="mt-[30px] ml-0.5 md:ml-0 !text-blue_gray-900 leading-[30px]"
                      >
                        We all know that every person has his or her own desire
                        to work, but do you know that we can actually be
                        consistent in making works if we want, now in this
                        article I want to invite all of you to learn to be
                        consistent in creating.
                      </Text>
                      <div className="flex flex-row sm:flex-col justify-between w-[65%] md:w-full mt-[19px] sm:gap-10">
                        <div className="flex flex-row justify-start items-center gap-2.5">
                          <Button
                            color="light_blue_50"
                            size="xl"
                            className="w-[55px] rounded-[27px]"
                          >
                            <Img src="images/img_clock_1.svg" />
                          </Button>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 text-center"
                          >
                            5 minutes ago
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5">
                          <Button
                            color="lime_50"
                            size="xl"
                            className="w-[55px] rounded-[27px]"
                          >
                            <Img src="images/img_like_1.svg" />
                          </Button>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 text-center"
                          >
                            12 Like
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5">
                          <Button
                            color="red_50"
                            size="xl"
                            className="w-[55px] rounded-[27px]"
                          >
                            <Img src="images/img_send_1_1.svg" />
                          </Button>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 text-center"
                          >
                            Share
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start mt-5">
                        <Button
                          color="indigo_900_01"
                          size="5xl"
                          shape="round"
                          rightIcon={
                            <Img
                              src="images/img_arrowpointingtoright_1.svg"
                              alt="arrow-pointing-to-right 1"
                            />
                          }
                          className="mt-5 gap-[19px] sm:px-5 tracking-[0.12px] font-bold min-w-[255px] hover:bg-sky-500 sm:min-w-full"
                        >
                          <text className="!text-white-A700 ml-6">
                            Continue Reading
                          </text>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                        <div className="flex flex-row justify-start items-center w-[34%] sm:w-full gap-3.5">
                          <Img
                            src="images/img_ellipse_5.png"
                            alt="circleimage"
                            className="h-[70px] w-[70px] md:h-auto rounded-[50%]"
                          />
                          <div className="flex flex-col items-start justify-start w-[66%] gap-[3px]">
                            <Heading
                              as="h6"
                              className="!text-blue_gray-600 text-center !font-semibold"
                            >
                              By Jhone Leonardo
                            </Heading>
                            <Text size="xs" as="p" className="text-center">
                              12 September, 2020
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Heading
                        size="2xl"
                        as="h1"
                        className="mt-[30px] ml-0.5 md:ml-0 tracking-[0.12px] !font-merriweather italic"
                      >
                        Consistent way of working to train yourself
                      </Heading>
                      <Img
                        src="images/img_rectangle_11_1.png"
                        alt="image"
                        className="w-full md:h-[390px] mt-[29px] ml-0.5 md:ml-0 object-cover rounded-[5px]"
                      />
                      <Text
                        as="p"
                        className="mt-[30px] ml-0.5 md:ml-0 !text-blue_gray-900 leading-[30px]"
                      >
                        We all know that every person has his or her own desire
                        to work, but do you know that we can actually be
                        consistent in making works if we want, now in this
                        article I want to invite all of you to learn to be
                        consistent in creating.
                      </Text>
                      <div className="flex flex-row sm:flex-col justify-between w-[65%] md:w-full mt-[19px] sm:gap-10">
                        <div className="flex flex-row justify-start items-center gap-2.5">
                          <Button
                            color="light_blue_50"
                            size="xl"
                            className="w-[55px] rounded-[27px]"
                          >
                            <Img src="images/img_clock_1.svg" />
                          </Button>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 text-center"
                          >
                            5 minutes ago
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5">
                          <Button
                            color="lime_50"
                            size="xl"
                            className="w-[55px] rounded-[27px]"
                          >
                            <Img src="images/img_like_1.svg" />
                          </Button>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 text-center"
                          >
                            12 Like
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5">
                          <Button
                            color="red_50"
                            size="xl"
                            className="w-[55px] rounded-[27px]"
                          >
                            <Img src="images/img_send_1_1.svg" />
                          </Button>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-black-900 text-center"
                          >
                            Share
                          </Text>
                        </div>
                      </div>
                      <Button
                        color="indigo_900_01"
                        size="5xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_arrowpointingtoright_1.svg"
                            alt="arrow-pointing-to-right 1"
                          />
                        }
                        className="mt-5 gap-[19px] sm:px-5 tracking-[0.12px] font-bold min-w-[255px] hover:bg-sky-500 sm:min-w-full"
                      >
                        <text className="!text-white-A700 ml-6">
                          Continue Reading
                        </text>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[32%] md:w-full gap-[49px]">
                <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                  <div className="flex flex-col items-center justify-start">
                    <Img
                      src="images/img_rectangle_10.png"
                      alt="image_one"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[5px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <Heading
                      size="lg"
                      as="h4"
                      className="ml-px md:ml-0 !font-merriweather"
                    >
                      Jhone Leonardo
                    </Heading>
                    <Text size="s" as="p" className="text-center !font-medium">
                      Podcaster & Blogger
                    </Text>
                  </div>
                  <Text as="p" className="ml-px md:ml-0 leading-[30px]">
                    I want to share knowledge in my own style. I have been
                    working on various things that I think I really need to
                    share with you all. I am a jhone podcaster and blogger
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[44%] md:w-full gap-5">
                  <Heading as="h6" className="!font-merriweather">
                    Follow Me On
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-3.5">
                    <div className="flex flex-row justify-start items-center gap-[5px]">
                      <Img
                        src="images/img_email_1.svg"
                        alt="emailone_one"
                        className="h-[20px] w-[20px] mb-px"
                      />
                      <Text size="s" as="p">
                        hello@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2">
                      <Img
                        src="images/img_vector.svg"
                        alt="vector_one"
                        className="h-[20px] w-[20px] mb-px"
                      />
                      <Text size="s" as="p">
                        @insta_user
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[5px]">
                      <Img
                        src="images/img_twitter_2_1.svg"
                        alt="twitter2one_one"
                        className="h-[20px] w-[20px] mb-px"
                      />
                      <Text size="s" as="p">
                        @tweetuser
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                  <Heading as="h6" className="!font-merriweather">
                    Tranding Blog
                  </Heading>
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[200px] w-full sm:w-full relative">
                      <Img
                        src="images/img_rectangle_13.png"
                        alt="image_two"
                        className="justify-center h-[200px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                      />
                      <div className="justify-center h-[200px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img
                          src="images/img_rectangle_14.png"
                          alt="image_three"
                          className="justify-center h-[200px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[77%] gap-[11px] bottom-[13%] right-0 left-0 m-auto absolute">
                          <Heading
                            as="h6"
                            className="!text-white-A700 !font-merriweather italic"
                          >
                            Consistent way of working to train yourself
                          </Heading>
                          <Text size="xs" as="p" className="!text-white-A700">
                            5 minutes ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-5">
                    <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                      <Img
                        src="images/img_rectangle_14_96x96.png"
                        alt="image"
                        className="w-[96px] md:h-auto object-cover rounded-[5px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[69%] gap-2.5">
                        <Heading as="h6" className="!font-merriweather italic">
                          Consistent way of working to train yourself
                        </Heading>
                        <Text size="xs" as="p">
                          5 minutes ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                      <Img
                        src="images/img_rectangle_14_1.png"
                        alt="image"
                        className="w-[96px] md:h-auto object-cover rounded-[5px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[69%] gap-2.5">
                        <Heading as="h6" className="!font-merriweather italic">
                          Consistent way of working to train yourself
                        </Heading>
                        <Text size="xs" as="p">
                          5 minutes ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                      <Img
                        src="images/img_rectangle_14_2.png"
                        alt="image"
                        className="w-[96px] md:h-auto object-cover rounded-[5px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[69%] gap-2.5">
                        <Heading as="h6" className="!font-merriweather italic">
                          Consistent way of working to train yourself
                        </Heading>
                        <Text size="xs" as="p">
                          5 minutes ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                      <Img
                        src="images/img_rectangle_14_3.png"
                        alt="image"
                        className="w-[96px] md:h-auto object-cover rounded-[5px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[69%] gap-2.5">
                        <Heading as="h6" className="!font-merriweather italic">
                          Consistent way of working to train yourself
                        </Heading>
                        <Text size="xs" as="p">
                          5 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                  <Heading
                    as="h6"
                    className="tracking-[0.12px] !font-merriweather"
                  >
                    Categories
                  </Heading>
                  <div className="flex flex-col w-full gap-[9px] md:gap-[2.25px]">
                    <div className="flex flex-col items-center justify-start w-full pb-2.5">
                      <div className="flex flex-row justify-between items-center w-full">
                        <Text as="p">Writing</Text>
                        <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
                          <Text
                            as="p"
                            className="flex justify-center items-center h-[40px] w-[40px] !text-gray-600_01 !font-normal bg-blue-50 text-center rounded-[50%]"
                          >
                            1
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-px bg-blue_gray-100" />
                    <div className="flex flex-row justify-between items-center w-full">
                      <Text as="p">Working</Text>
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
                        <Text
                          as="p"
                          className="flex justify-center items-center h-[40px] w-[40px] !text-gray-600_01 !font-normal bg-blue-50 text-center rounded-[50%]"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                    <div className="w-full h-px bg-blue_gray-100" />
                    <div className="flex flex-col items-center justify-start w-full pt-2.5">
                      <div className="flex flex-row justify-between items-center w-full">
                        <Text as="p">Podcaster</Text>
                        <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
                          <Text
                            as="p"
                            className="flex justify-center items-center h-[40px] w-[40px] !text-gray-600_01 !font-normal bg-blue-50 text-center rounded-[50%]"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[100px] p-[33px] sm:p-5 bg-gray-600_01" />
      </div>
    </>
  );
}
