@objc(HoverableViewManager)
class HoverableViewManager: RCTViewManager {

  override func view() -> (HoverableView) {
    return HoverableView()
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true;
  }

}

class HoverableView : UIView {
    
  @objc var onMouseEnter: RCTDirectEventBlock?
  @objc var onMouseLeave: RCTDirectEventBlock?
  @objc var onMouseMove: RCTDirectEventBlock?

  override init(frame: CGRect) {
    super.init(frame: frame)
    #if targetEnvironment(macCatalyst)
    let hover = UIHoverGestureRecognizer(target: self, action: #selector(hovering(_:)))
    self.addGestureRecognizer(hover)
    #else
    if #available(iOS 13.0, *) {
      let hover = UIHoverGestureRecognizer(target: self, action: #selector(hovering(_:)))
      self.addGestureRecognizer(hover)
    }
    #endif
  }

  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

#if targetEnvironment(macCatalyst)
  @objc
  func hovering(_ recognizer: UIHoverGestureRecognizer) {
    switch recognizer.state {
      case .began:
        self.onMouseEnter?([:])
      case .changed:
        self.onMouseMove?([:])
      case .ended:
        self.onMouseLeave?([:])
      default:
        break
    }
  }
#else
  @available(iOS 13.0, *)
  @objc
  func hovering(_ recognizer: UIHoverGestureRecognizer) {
    switch recognizer.state {
      case .began:
        self.onMouseEnter?([:])
      case .changed:
        self.onMouseMove?([:])
      case .ended:
        self.onMouseLeave?([:])
      default:
        break
    }
  }
#endif
    
}
