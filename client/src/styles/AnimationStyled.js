const DropDownAnimation = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const listChildrenAnimation = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const listParentAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const TitleAnimation = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.7,
    },
  },
};

const ImageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "circIn",
      duration: 1,
    },
  },
};

const sectionAboutAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const SectionAnimation = {
  hidden: {
    opacity: 0,
    y:50
  },
  show: {
    opacity: 1,
    y:0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const AbsoluteFlexContainerAnimation = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 0.3,
    },
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: {
      type: "easeOut",
      duration: 0.3,
    },
  },
};

const ScaleOutInAnimation = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

const FadeInOutAnimation = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export {
  DropDownAnimation,
  listParentAnimation,
  listChildrenAnimation,
  TitleAnimation,
  sectionAboutAnimation,
  ImageAnimation,
  AbsoluteFlexContainerAnimation,
  ScaleOutInAnimation,
  FadeInOutAnimation,
  SectionAnimation,
};
