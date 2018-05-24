<?xml version="1.0" encoding="UTF-8"?>
<document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="13771" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" launchScreen="YES" useTraitCollections="YES" useSafeAreas="YES" colorMatched="YES" initialViewController="01J-lp-oVM">
    <device id="retina4_7" orientation="portrait">
        <adaptation id="fullscreen"/>
    </device>
    <dependencies>
        <deployment identifier="iOS"/>
        <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="13772"/>
        <capability name="Safe area layout guides" minToolsVersion="9.0"/>
        <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>
    </dependencies>
    <scenes>
        <!--View Controller-->
        <scene sceneID="EHf-IW-A2E">
            <objects>
                <viewController id="01J-lp-oVM" sceneMemberID="viewController">
                    <view key="view" contentMode="scaleToFill" id="Ze5-6b-2t3">
                        <rect key="frame" x="0.0" y="0.0" width="375" height="667"/>
                        <autoresizingMask key="autoresizingMask" widthSizable="YES" heightSizable="YES"/>
                        <subviews>
                            <imageView userInteractionEnabled="NO" contentMode="scaleToFill" horizontalHuggingPriority="251" verticalHuggingPriority="251" image="1242x2208.png" translatesAutoresizingMaskIntoConstraints="NO" id="GaY-E3-Ygh">
                                <rect key="frame" x="0.0" y="0.0" width="375" height="667"/>
                            </imageView>
                        </subviews>
                        <color key="backgroundColor" red="1" green="1" blue="1" alpha="1" colorSpace="custom" customColorSpace="sRGB"/>
                        <constraints>
                            <constraint firstItem="GaY-E3-Ygh" firstAttribute="bottom" secondItem="Bcu-3y-fUS" secondAttribute="bottom" id="Il3-Zl-Fid"/>
                            <constraint firstItem="GaY-E3-Ygh" firstAttribute="leading" secondItem="Bcu-3y-fUS" secondAttribute="leading" id="MuC-Y5-OUa"/>
                            <constraint firstItem="GaY-E3-Ygh" firstAttribute="top" secondItem="Ze5-6b-2t3" secondAttribute="top" id="eZP-3f-Gcr"/>
                            <constraint firstItem="GaY-E3-Ygh" firstAttribute="trailing" secondItem="Bcu-3y-fUS" secondAttribute="trailing" id="usK-jk-KxR"/>
                        </constraints>
                        <viewLayoutGuide key="safeArea" id="Bcu-3y-fUS"/>
                    </view>
                </viewController>
                <placeholder placeholderIdentifier="IBFirstResponder" id="iYj-Kq-Ea1" userLabel="First Responder" sceneMemberID="firstResponder"/>
            </objects>
            <point key="canvasLocation" x="52" y="374.66266866566718"/>
        </scene>
    </scenes>
    <resources>
        <image name="1242x2208.png" width="1242" height="2208"/>
    </resources>
</document>