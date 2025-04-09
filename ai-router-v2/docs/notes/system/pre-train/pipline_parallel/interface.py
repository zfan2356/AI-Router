"""
This module provides an interface for pipeline parallel operations.
"""

from abc import ABC, abstractmethod
from typing import List


class BaseScheduleStrategy(ABC):
    """
    Base class for all schedule strategies
    """

    def __init__(self, *args, **kwargs):
        pass

    @classmethod
    @abstractmethod
    def initialize_pipline_distributed(cls, *args, **kwargs):
        """
        Initialize the pipline parallel distributed strategy hooks or utils
        """
        pass

    @classmethod
    @abstractmethod
    def get_stage_layer_ids(cls, num_layers: int) -> List[List[int]]:
        """
        Get the layer ids for each stage
        """
        pass

    @abstractmethod
    def __call__(self, *args, **kwargs):
        """
        Call the schedule strategy
        """
        pass
